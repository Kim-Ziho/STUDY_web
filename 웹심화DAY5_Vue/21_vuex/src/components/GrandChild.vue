<template>
  <div>
    GrandChild
    <br>
    이름 : {{$store.state.myName}}
    <br>
    나이 : {{$store.state.myAge}}
      <button @click="changeAge">나이 변경</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.state)
  },
  methods: {
    changeAge(){
      this.$store.commit("SET_MY_AGE", 500);
    }
  }
}
</script>

<style>

</style>