const datas = [3, 5, 4, 2];
const newDatas = datas.filter((data, idx) => idx > 1);
console.log(newDatas);

const newDatas2 = datas.filter((data, idx) => data > 2);
console.log(newDatas2);