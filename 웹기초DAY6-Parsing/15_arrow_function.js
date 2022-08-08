function go(number) {
  return number * number;
}

const go1 = function (number) {
  return number * number;
}
// 화살표 함수는 함수의 이름이 없는 무명함수
const go2 = (number) => {
  return number * number;
}
// 가독성 향상 이유로 사용한다. 줄일 수 있다.
const go3 = (number) => number * number;
// 인자가 하나일경우 () 생략이 가능
const go4 = number => number * number;
