<template>
  <div>
    <div>상품명 : {{data.title}}</div>
    <div>가격 : {{data.price}}</div>
  </div>
</template>

<script>
import {api} from "../../utils/axios"
export default {
  data() {
    return {
      data: {}
    }
  },
  async created() {
    this.$store.commit("SET_LOADING", true);
    const result = await api.jsonplaceholder.findOne(this.$route.params.id);
    console.log(result);
    this.data = result.data;
    this.$store.commit("SET_LOADING", false);
  }
}
</script>

<style>

</style>