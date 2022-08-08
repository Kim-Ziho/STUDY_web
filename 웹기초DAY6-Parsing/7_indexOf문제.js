const str = "KFCOCOBBQMINMINC";
const cIdx = str.indexOf("C");
// console.log(cIdx);

let idx = 0;
while (true) {
  const ret = str.indexOf("C", idx);
  if (ret === -1) break;
  idx = ret + 1;
  console.log(ret);
}
