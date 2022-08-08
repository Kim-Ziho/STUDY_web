const str = "BTSMINBTSMINBTSKKOPSM";
// SM MIN OP BTS
let idx = 0;
let cnt = 0;
while (true) {
  let ret = str.indexOf("ABC", idx);
  if (ret === -1) break;
  idx = ret + 1;
  cnt += 1;
}
console.log(cnt);