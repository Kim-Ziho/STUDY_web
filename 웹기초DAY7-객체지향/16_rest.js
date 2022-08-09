// rest
const chicken = {
  type: "양념",
  drumsticks: 2,
  wing: 2,
};

const {type, ...another} = chicken;
console.log(type);
console.log(another);