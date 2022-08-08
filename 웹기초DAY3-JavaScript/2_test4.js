// console.log(document.querySelector("h1").textContent);
// document.querySelectorAll(".lalala").textContent = "ㅎㅎ";
const lalalas = document.querySelectorAll(".lalala");
console.log(lalalas[0].textContent);
console.log(lalalas[1].textContent);
console.log(lalalas[2].textContent);

for (let i = 0; i < lalalas.length; i++) {
  lalalas[i].textContent = "Yes";
}
