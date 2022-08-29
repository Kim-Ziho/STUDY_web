// < Array Helper Method >
// map, filter, find, every, some, reduce
// map : return 값을 가지며 새로운 배열을 만듦.
// filter : 원하는 값들로만 새로운 배열을 만듦.
// every : 배열안의 모든 데이터가 조건을 만족하는 경우 true를 반환함.
// some : 배열안의 데이터 중 하나라도 조건을 만족하는 경우 true를 반환함.
// reduce : 배열의 각 요소에 대해 주어진 reduce 함수를 실행시키고 하나의 결과 값을 반환

const nums = [1, 2, 3, 4];
const triple = nums.map((num) => num * num * num);
console.log(triple);
