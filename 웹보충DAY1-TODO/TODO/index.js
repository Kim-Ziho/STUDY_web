// require("express")
// 함수("매개변수") [Function: createApplication] 애플리케이션, 즉 앱을 만드는 함수
const express = require("express")
const app = express()

const { pool } = require("./db")


app.listen(8080, () => { console.log("서버가 동작하고 있습니다")})
// app.listen(첫번째 매개변수 :포트번호, 실행시킬 콜백함수)

app.use(express.static(__dirname + "/views"))

// post(요청을 할때는)
app.use(express.json())

app.set("view engine", "ejs")

app.get("/", async (req, res) => {
    const data = await pool.query("select * from todos")
    res.render("index", {
        title: "인덱스",
        data: data[0]
    })
    // 서버 사이드 렌더링
})

// app.get("라우터 경로", "실행할 콜백함수")
app.get("/todos", async (request, response) => {
    // pool.query("쿼리문")
    try {
        const data = await pool.query("select * from todos")
        return response.json(data[0])
        
    } catch (error) {
        return res.json({
            success: false,
            message: "에러가 발생하였습니다"
        })
    }
})

// app.post("라우터 경로", "콜백함수")
app.post("/todo", async (req, res) => {

    const { todo } = req.body
    const { completed } = req.body

    try {
        // console.log(await pool.query(`insert into todos (todo,completed) values (?,?)`, [req.body.todo, req.body.completed]))
        if (todo && completed) {
            await pool.query(`insert into todos (todo,completed) values ("${todo}", "${completed}")`)            
                return res.json({
                    success: true,
                    message: "할일 등록에 성공하였습니다."
                })
        }

        if (todo) {
            return res.json({
                success: false,
                message: "할일 등록에 실패하였습니다. 완료상태를 입력하세요"
            })
        }

    } catch (error) {
        return res.json({
            success: false,
            message: "할일 추가에 에러가 발생하였습니다"
        })
    }
})

app.get("/todo/:id", async (request, response) => {
    const { id }  = request.params
    try {
        const data = await pool.query(`select * from todos where id = ${id}`)
        return response.json(data[0])
        
    } catch (error) {
        return res.json({
            success: false,
            message: "에러가 발생하였습니다"
        })
    }
})

// app.patch("라우터 경로", "콜백함수")
app.patch("/todo/:id", async (req, res) => {
    // UPDATE [테이블명] SET [컬럼명] = "변경할 값" WHERE 컬럼값 = "값"
    try {
        const data = await pool.query(`UPDATE todos SET todo = "${req.body.todo}"  WHERE id = "${req.params.id}"`) 
        if (data[0].serverStatus === 2 && data[0].affectedRows !== 0) {
            return res.json({
                success: true,
                message: "todo 정보 수정에 성공하였습니다."
            })
        } else {
            return res.json({
                success: false,
                message: "todo 정보 수정에 실패하였습니다."
            })
        }
    } catch {
        return res.json({
            success: false,
            message: "todo 정보 수정에 실패하였습니다."
        })
    }
})

// app.delete("라우터경로", "콜백함쉬")
app.delete("/todos", async (req, res) => {
    // Delete From "테이블명"
    try {
        await pool.query(`DELETE FROM todos`)
        return res.json({
            success: true,
            message: "할일 삭제에 성공하였습니다."
        })
    } catch {
        return res.json({
            success: false,
            message: "할일 삭제에 실패하였습니다."
        })
    }
})

app.delete("/todo/:id", async (req, res) => {
    try {
        await pool.query(`DELETE FROM todos WHERE id = "${req.params.id}"`)
        return res.json({
            success: true,
            message: "할일 삭제에 성공하였습니다."
        })
    } catch {
        return res.json({
            success: false,
            message: "할일 삭제에 실패하였습니다."
        })
    }
})


