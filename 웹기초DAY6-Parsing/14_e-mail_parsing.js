let str = "bts@macdonald.co.kr||inho@mincoding.co.kr||jason@jyp.com";
str = str.replace(/co.kr/g, "net");
str = str.replace(/com/g, "net");
const array = str.split("||");
const idArray = [];
// console.log(array);
for (let i = 0; i < array.length; i++) {
  const index = array[i].indexOf("@");
  const id = array[i].substring(0, index);
  idArray.push(id);
}
console.log(idArray);