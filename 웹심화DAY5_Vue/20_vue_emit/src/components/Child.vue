<template>
  <div>
    Child
    <!-- emit으로 요청을 받아오는 방법
    v-on
    @: 자식 컴포넌트에서 진행한 값
     -->
    <GrandChild @emitTest="changeNotice" :notice="notice" :year="year" />
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue"
export default {
  components: {
    GrandChild
  },
  props: ["notice", "year"],
  methods: {
    changeNotice(notice) {
      console.log(notice)
      this.$emit("emitTest", notice)
    }
  }
}
</script>

<style>

</style>