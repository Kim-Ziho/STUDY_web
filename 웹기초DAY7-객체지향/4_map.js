const nums = [3, 5, 4, 2];
nums.forEach((num) => console.log(num));

const newNums = nums.map((num) => num + 1);
console.log(newNums);

const sampleFunc = (num) => console.log(num)
nums.forEach(sampleFunc);