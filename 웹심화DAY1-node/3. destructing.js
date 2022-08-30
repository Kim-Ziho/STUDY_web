const friends = {
  name1: "철수",
  name2: "영희",
  run: (word) => console.log(word, "가자"),
};

// const a = friends;
// console.log(a.run(a.name1));
// console.log(a.run(a.name2));

const { name1, name2, run } = friends;
console.log(run(name1));
console.log(run(name2));
