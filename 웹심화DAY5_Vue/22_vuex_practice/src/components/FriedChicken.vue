<template>
  <div>
    <h1>FriedChicken</h1>
    <p>{{$store.state.title}}</p>
    <p>소금 : {{$store.state.salt}}</p>
    <ChickenChild />
  </div>
</template>

<script>
import ChickenChild from "./ChickenChild.vue"
export default {
  components: {
    ChickenChild,
  }
}
</script>

<style>

</style>