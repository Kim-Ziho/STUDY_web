<template>
  <div>
    <h1>라우터를 이동하는 방법</h1>
    <div v-for="(num, index) in arr" v-bind:key="index">
      <button v-on:click="moveRouter(num)">라우터 {{ num }}로 이동</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moveRouter(num) {
      this.$router.push(`/todo/${num}`)
    }
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5]
    }
  }
};
</script>

<style></style>
