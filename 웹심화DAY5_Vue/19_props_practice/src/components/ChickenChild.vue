<template>
  <div>
    <h1>ChickenChild</h1>
    <button @click="viewSalt">소금</button>
    <button @click="changeSalt">소금 양 변경</button>
    <p v-if="seen">
      {{ salt }}
      <br />
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["salt", "title"],
  methods: {
    viewSalt() {
      this.seen = true
    },
    changeSalt() {
      this.$emit("emit1", 20)
    }
  },
  data() {
    return {
      seen: false
    }
  }
};
</script>

<style></style>
