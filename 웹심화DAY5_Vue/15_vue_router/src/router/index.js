import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Board from "../views/Board";
import About from "../views/About";

Vue.use(VueRouter);

// router 정의법
// import로 가져온다
// router 등록을 한다
// {path: "라우터 주소", name: "라우터 명칭",
//  component: "import로 가져온 컴포넌트"}

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/board",
    name: "board",
    component: Board,
  },
];

// history -> 일반 웹사이트
// history가 아니면 어플리케이션에서 활용 (# 식으로 식작)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
