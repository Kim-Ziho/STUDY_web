import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Main"
import BoardList from "../views/board/List"
import BoardDetail from "../views/board/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/board",
    name: "board-list",
    component: BoardList
  },
  {
    path: "/board/:id",
    name: "board-detail",
    component: BoardDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
