import Vue from 'vue'
import VueRouter from 'vue-router'
// views 로부터 import로 가져온다
import Main from "../views/Main"
import List from "../views/todos/List"
import Detail from "../views/todos/Detail"

Vue.use(VueRouter)

// routes 배열안에 정의한다
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/todos",
    name: "List",
    component: List
  },
  {
    path: "/todos/:id",
    name: "Detail",
    component: Detail
  }
]
// router-view App.vue에 설정

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
