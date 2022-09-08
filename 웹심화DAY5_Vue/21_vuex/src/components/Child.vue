<template>
  <div>
    Child
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue"
export default {
  components: {
    GrandChild
  }
}
</script>

<style>

</style>