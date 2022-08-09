//비구조화할당
//구조분해할당

const abc = {
  id: "치킨",
  type: "후라이드",
};

const {id, type} = abc;
console.log(id);
console.log(type);

const array = [1, 2];
const [one, two] = array;
console.log(one);
console.log(two);