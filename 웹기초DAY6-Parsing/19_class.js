// 첫글자 대문자
class Human {
  //생성자
  //초기화 부분
  constructor(name) {
    this.name = name;
  }
  //메서드
  sayMyName() {
    console.log("이름: " + this.name);
  }
}
const person1 = new Human("이온유");
person1.sayMyName();

const person2 = new Human("허범성");
person2.sayMyName();

const person3 = new Human("이자룡");
person3.sayMyName();