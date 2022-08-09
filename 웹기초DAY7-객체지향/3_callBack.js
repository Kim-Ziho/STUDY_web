setTimeout(() => {
  console.log("hi");
}, 2000)

const func = () => console.log("Hi");
setTimeout(func, 3000);