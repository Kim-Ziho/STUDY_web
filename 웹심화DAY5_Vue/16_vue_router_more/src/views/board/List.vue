<template>
  <div>
    <h2>라우터를 이동하는 방법</h2>
    <router-link to="/board/1">라우터를 이동하는 방법 1</router-link> 
    <br>
    <!-- v-on: === @ -->
    <button v-on:click="moveRouter">라우터를 이동하는 방법 2</button>
  </div>
</template>

<script>
export default {
  methods: {
    moveRouter() {
      // this.$router.push(라우터 주소)
      // 특정 라우터로 이동
      this.$router.push("/board/2")
    }
  },
  created(){
    // router 역할
    // 라우터 이동등 라우터에 대한 기능정의
    console.log(this.$router);
    console.log("=========");
    // route 역할
    // 현재 라우터에 대한 정보
    console.log(this.$route);
  }
}
</script>

<style>

</style>