import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import TodoList from "../views/Todo/List"
import TodoDetail from "../views/Todo/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/todo",
    name: "todo",
    component: TodoList
  },
  {
    path: "/todo/:id",
    name: "todo-detail",
    component: TodoDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
