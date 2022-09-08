<template>
  <div>
    할아버지
    <Child @emitTest="changeNotice" :notice="notice" :year="year" />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  components: {
    Child,
  },
  data() {
    return {
      notice: "추석 잘 보내세요.",
      year: 2022
    }
  },
  methods: {
    changeNotice(notice) {
      this.notice = notice
    }
  }
};
</script>

<style></style>
