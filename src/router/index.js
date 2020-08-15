import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  // mode: 'hash', // require service support
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "./App.vue"), //
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/methods",
        name: "methods",
        component: () => import("../views/methods/Methods.vue"),
      },
      {
        path: "/muthodsOne",
        name: "muthodsOne",
        component: () => import("../views/methods/muthodsOne.vue"),
      },
      {
        path: "/muthodsTwo",
        name: "muthodsTwo",
        component: () => import("../views/methods/muthodsTwo.vue"),
      },
      {
        path: "/muthodsThree",
        name: "muthodsThree",
        component: () => import("../views/methods/muthodsThree.vue"),
      },
      {
        path: "/MyTest",
        name: "MyTest",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/MyTest.vue"), //
        children: [
          {
            path: "/MyFirst",
            name: "MyFirst",
            component: () => import("../views/MyTest/MyFirst.vue"),
          },
        ],
      },
      {
        path: "/tree",
        name: "tree",
        component: () => import("../views/element-ui/tree.vue"),
        // component: elementUi,
      },
      {
        path: "/select",
        name: "select",
        component: () => import("../views/element-ui/select.vue"),
        // component: elementUi,datepick
      },
      {
        path: "/datepick",
        name: "datepick",
        component: () => import("../views/element-ui/datepick.vue"),
        // component: elementUi,
      },
      {
        path: "/table",
        name: "table",
        component: () => import("../views/element-ui/table.vue"),
        // component: elementUi,Pagination
      },
      {
        path: "/Pagination",
        name: "Pagination",
        component: () => import("../views/element-ui/Pagination.vue"),
        // component: Carousel,
      },
      {
        path: "/Carousel",
        name: "Carousel",
        component: () => import("../views/element-ui/Carousel.vue"),
        // component:Carousel ,
      },
    ],
  },

  {
    path: "/user/login",
    name: "/user/login",
    component: () => import("../views/user/Login.vue"),
  },
  {
    path: "/LineBar",
    name: "/LineBar",
    component: () => import("../views/echarts/LineBar.vue"),
  },
];

const router = new VueRouter({
  mode: "hash", //打包改成hash
  base: process.env.BASE_URL,
  routes,
});

export default router;
