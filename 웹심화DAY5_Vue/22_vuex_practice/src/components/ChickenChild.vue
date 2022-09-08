<template>
  <div>
    <h1>ChickenChild</h1>
    <button @click="changeSalt">소금 양 변경</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeSalt() {
      this.$store.commit("SET_SALT", 20);
    }
  }
}
</script>

<style>

</style>