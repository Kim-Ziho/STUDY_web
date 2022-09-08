<template>
  <div>
    <h1>App</h1>
    <Child @emit1="changeSalt" :salt="salt" :title="title" />
  </div>
</template>

<script>
import Child from "./components/FriedChicken.vue"
export default {
  components: {
    Child,
  },
  data() {
    return {
      salt: 30,
      title: "치킨은 맛있다"
    }
  },
  methods: {
    changeSalt(salt) {
      this.salt = salt
    }
  }
}
</script>

<style>

</style>