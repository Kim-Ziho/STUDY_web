const input = prompt("세 문자열 입력");
const splitInput = input.split(" ");

if (splitInput[0] === splitInput[1] && splitInput[0] == splitInput[2]) {
  alert("Very Good");
} 
else if (splitInput[0] === splitInput[1] || splitInput[0] == splitInput[2] || splitInput[1] == splitInput[2]) {
  alert("Two");
}
else {
  alert("Only One");
}