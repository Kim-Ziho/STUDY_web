class Lawyer {
  constructor(name, age, hi) {
    this.name = name;
    this.age = age;
    this.hi = hi;
  }
  introduce(){
    console.log("이름: " + this.name);
    console.log("나이: " + this.age);
    console.log("자기소개: " + this.hi);
  }
}
const lawyer1 = new Lawyer("우영우", 27, "기러기 토마토");
lawyer1.introduce();
const lawyer2 = new Lawyer("최수연", 27, "봄날의 햇살");
lawyer2.introduce();