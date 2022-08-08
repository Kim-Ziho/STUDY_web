const str = "jonylee";
const arr = [1,2,3,4,5];
console.log(str.substring(1, 3));
console.log(arr.slice(3, 1)); 
// slice는 배열, 문자열 가능 : 강사님은 slice만 씀
// 좋은 코드 : 주석이 필요 없는 코드
console.log(arr.splice(1, 3)); // 끝 인덱스 포함
console.log(arr); // 원형 파괴 POP (위험 DANGER)