const nav = document.querySelectorAll(".nav_item");
const nav_list = [];
for (let i = 0; i < nav.length; i++) {
  nav_list.push(nav[i].textContent);
}
console.log(nav_list);
