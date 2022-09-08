<template>
  <div>
    GrandChild
    <div>공지 : {{year}}년 {{notice}}</div>
    <!-- props App -> Child -> GrandChild -->
    <!-- emit GrandChild -> Child -> App -->
    <button @click="changeNotice">공지 변경</button>
  </div>
</template>

<script>
export default {
  props: ["notice", "year"],
  methods: {
    changeNotice() {
      // emit을 통해 부모 컴포넌트에 요청을 보내기
      // this.$emit("이벤트 이름", "넘겨줄 데이터값")
      this.$emit("emitTest", "추석 맛있는거 많이 드세요.")
    }
  }
}
</script>

<style>

</style>