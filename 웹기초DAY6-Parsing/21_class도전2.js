class Hero {
  constructor(hp){
    this.hp = hp;
  }
  showHp(){
    console.log(this.hp);
  }
  run() {
    this.hp -= 10;
  }
}
const batman = new Hero(100);
batman.showHp();
batman.run();
batman.run();
batman.showHp();
