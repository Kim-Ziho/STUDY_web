const URL = "https://jsonplaceholder.typicode.com/todos/";
const getData = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getData();

/*
동기
- 응답을 받아야 다음 코드를 실행할 수 있다.
- 모든 일을 순차적으로 진행한다.

비동기
- 응답이 오지 않아도 다음 코드를 실행 할 수 있다.
- js는 싱글 스레드이나 비동기 처리가 가능하다.  Web API라는 것이 비동기 처리를 해준다.
*/