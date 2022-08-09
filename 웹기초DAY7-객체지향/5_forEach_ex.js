const nums = [4, 3, 1, 6, 5];
let cnt = 0;
const isOdd = (num) => {
  if (num % 2 == 1) cnt += 1;
}
nums.forEach(isOdd);
console.log(cnt);