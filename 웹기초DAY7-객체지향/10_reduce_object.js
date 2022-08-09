const arr = [
  "a", "b",
  "c", "d",
  "a", "b",
];
const result = arr.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  }
  else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(result);