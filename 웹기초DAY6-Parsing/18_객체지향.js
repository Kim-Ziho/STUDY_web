// number 를 조작할 수 있는 함수
const ssafy = {
  number: 99,
  eat() {
    this.number = this.number + 5;
  },
  run() {
    this.number = this.number - 10;
  },
  show() {
    console.log(this.number);
  },
  // 화살표 함수는 본인 객체보다 상위 객체로 접근한다.

  test: () => {
    console.log(this);
  }
}

ssafy.eat();
ssafy.show();
ssafy.run();
ssafy.show();

ssafy.name = "김지호";
console.log(ssafy);