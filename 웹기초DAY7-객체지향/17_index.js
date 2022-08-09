const URL = "https://jsonplaceholder.typicode.com/todos/";

//비동기오면 조심해라. async, await
const getData = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getData();
