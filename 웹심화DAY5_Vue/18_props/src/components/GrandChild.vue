<template>
  <div>
    <h1>손자</h1>
    <div>나이 : {{ myAgeProp }}</div>
  </div>
</template>

<script>
export default {
  props: ["myAgeProp"],
};
</script>

<style scoped></style>
