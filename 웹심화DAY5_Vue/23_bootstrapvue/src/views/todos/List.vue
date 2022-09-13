<template>
  <div>
    <div @click="moveDetail(list.id)" v-for="list in lists" :key="list.id" class="list-wrapper">
      <div>
        {{list.title}}
      </div>
    </div>
  </div>
</template>

<script>
import {api} from "../../utils/axios"
export default {
  data() {
    return {
      lists: []
    }
  },
  async created() {
    // 데이터 입력 로딩을 키고
    this.$store.commit("SET_LOADING", true);
    const results = await api.jsonplaceholder.findAll();
    console.log(results);
    this.lists = results.data;
    this.$store.commit("SET_LOADING", false);
    // 데이터 넣고 로딩을 끄자
  },
  methods: {
    moveDetail(id) {
      console.log(id);
      this.$router.push(`/todos/${id}`)
    }
  }
}
</script>

<style>
  .list-wrapper{
    border: 1px solid black;
    padding: 20px;
  }
</style>