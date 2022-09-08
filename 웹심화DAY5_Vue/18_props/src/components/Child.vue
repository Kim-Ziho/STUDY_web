<template>
  <div>
    <h1>아버지</h1>
    <div>학교: {{ mySchoolProp }}</div>
    <div>나이: {{ myAgeProp }}</div>
    <GrandChild :myAgeProp="myAgeProp" />
  </div>
</template>

<script>
import GrandChild from "./GrandChild";
export default {
  components: {
    GrandChild,
  },
  props: ["mySchoolProp", "myAgeProp"],
};
</script>

<style scoped></style>
