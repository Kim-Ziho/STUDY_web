// 1번
// i는 변해야하는 변수이므로 let으로 선언한다.
const nums = [1,2,3,4,5,6,7,8]

for (let i = 0; i < nums.length; i++) {
  console.log()
}

// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// 2번
for (let i = 0; i < nums.length; i++) {
  console.log(i, typeof nums[i])
}

// 0 string
// 1 string
// 2 string
// 3 string
// 4 string
// 5 string
// 6 string
// 7 string
