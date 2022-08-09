const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const halljjak = arr.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc["홀수"] += 1;
  }
  else {
    acc["짝수"] += 1;
  }
  return acc;
},{
  "홀수": 0,
  "짝수": 0
});

console.log(halljjak);