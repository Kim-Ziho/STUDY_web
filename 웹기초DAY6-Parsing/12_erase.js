function erase(str, start, size) {
  const a = str.substring(0, start);
  let b = str.substring(start + size);

  return a + b;
}
const str = "ABCDEFGHIJK";
const result = erase(str, 3, 5);
console.log(result);