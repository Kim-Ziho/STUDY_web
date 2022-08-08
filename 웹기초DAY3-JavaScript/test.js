const family = ["아빠", "엄마", "나"];
const info = {
  userName: "지호",
  job: "싸피교육생",
  isMarriged: false,
  family: family,
  myStack: {
    frontend: "vue.js",
    backend: "node.js",
  },
  add: function (a, b) {
    return a + b;
  },
};

console.log(info.userName);
console.log(info.family[1]);
console.log(info.myStack.frontend);
console.log(info.add(1, 2));
