<template>
  <div>
    <h1>FriedChicken</h1>
    <GrandChild :salt="salt" :title="title" />
  </div>
</template>

<script>
import GrandChild from "./ChickenChild.vue"
export default {
  components: {
    GrandChild
  },
  props: ["salt", "title"]
}
</script>

<style>

</style>