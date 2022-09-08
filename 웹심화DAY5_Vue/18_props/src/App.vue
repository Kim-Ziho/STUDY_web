<template>
  <div id="app">
    <h1>할아버지</h1>
    <button @click="changeAge">나이 변경</button>
    <Child :mySchoolProp="mySchool" :myAgeProp="myAge" />
  </div>
</template>

<script>
import Child from "./components/Child";
export default {
  components: {
    Child,
  },
  data() {
    return {
      mySchool: "ssafy",
      myAge: 25,
    };
  },
  methods: {
    changeAge() {
      this.myAge = 15;
    }
  }
};
</script>

<style></style>
