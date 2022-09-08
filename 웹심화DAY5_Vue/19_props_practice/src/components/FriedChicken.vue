<template>
  <div>
    <h1>FriedChicken</h1>
    <GrandChild @emit1="changeSalt" :salt="salt" :title="title" />
  </div>
</template>

<script>
import GrandChild from "./ChickenChild.vue"
export default {
  components: {
    GrandChild
  },
  props: ["salt", "title"],
  methods: {
    changeSalt(salt) {
      this.$emit("emit1", salt)
    }
  }
}
</script>

<style>

</style>