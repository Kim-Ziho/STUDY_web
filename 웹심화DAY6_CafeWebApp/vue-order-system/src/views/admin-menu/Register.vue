<template>
  <div>
    <div class="form-wrapper">
      <div>메뉴 이름: <input v-model="name" type="text" /></div>
      <div>메뉴 설명: <input v-model="description" type="text" /></div>
      <input @change="fileChange" type="file">
      <button @click="create">메뉴 추가하기</button>
    </div>
    <div class="image-wrapper"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      description: null,
      file: null,
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", "메뉴 추가하기");
  },
  methods: {
    fileChange(e){
      console.log(e.target.files);
      this.file = e.target.files[0];
    },
    create() {
      console.log("메뉴 추가하기");
    }
  }
};
</script>

<style></style>