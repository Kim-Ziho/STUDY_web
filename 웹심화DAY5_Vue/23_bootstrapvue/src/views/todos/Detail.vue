<template>
  <div>
    <div>
      제목 : {{data.title}}
    </div>
    <div>
      완료 여부 : {{data.completed}}
    </div>
  </div>
</template>

<script>
import {api} from "../../utils/axios"

export default {
  data(){
    return{
      data: {}
    }
  },
  async created() {
    console.log(this.$route.params);
    // 로딩을 키고
    this.$store.commit("SET_LOADING", true);
    const result = await api.jsonplaceholder.findOne(this.$route.params.id);
    console.log(result);
    this.data = result.data;
    // 로딩을 끈다
    this.$store.commit("SET_LOADING", false);
  }

}
</script>

<style>

</style>