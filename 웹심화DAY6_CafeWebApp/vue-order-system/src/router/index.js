import Vue from 'vue'
import VueRouter from 'vue-router'
// order
import OrderMain from "../views/order/Main"
import OrderList from "../views/order/List"
import OrderRegister from "../views/order/Register"
import OrderDetail from "../views/order/Detail"
// admin-menu
import AdminMenuMain from "../views/admin-menu/Main"
import AdminMenuList from "../views/admin-menu/List"
import AdminMenuRegister from "../views/admin-menu/Register"
import AdminMenuDetail from "../views/admin-menu/Detail"

Vue.use(VueRouter)

const routes = [
  // order
  {
    path: "/",
    name: "home",
    component: OrderMain
  },
  {
    path: "/orders",
    name: "orders",
    component: OrderList
  },
  {
    path: "/orders/register",
    name: "order-register",
    component: OrderRegister
  },
  {
    path: "/orders/register/:id",
    name: "order-update",
    component: OrderRegister
  },
  {
    path: "/orders/:id",
    name: "order-detail",
    component: OrderDetail
  },
  // menu
  {
    path: "/admin/home",
    name: "menus-home",
    component: AdminMenuMain
  },
  {
    path: "/admin/menus",
    name: "menus",
    component: AdminMenuList
  },
  {
    path: "/admin/menus/register",
    name: "menus-register",
    component: AdminMenuRegister
  },
  {
    path: "/admin/menus/register/:id",
    name: "menus-update",
    component: AdminMenuRegister
  },
  {
    path: "/admin/menus/:id",
    name: "menus-detail",
    component: AdminMenuDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
