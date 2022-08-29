const star = '*';
const blank = ' ';
let s = 1;
let b = 4;
for (let i = 0; i < 5; i++) {
  const a = blank.repeat(b) + star.repeat(s);
  b -= 1;
  s += 2;
  console.log(a);
}



