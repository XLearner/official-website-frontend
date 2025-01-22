// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store/index";

/* 路由 */
import router from "./router";

/* axios */
import axios from "./api";
import api from "./api/api";
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import "swiper/dist/css/swiper.min.css";

/* 重置样式 */
import "./assets/css/reset.min.css";

/* jquery */
import "jquery";

/* bootstarp */
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min";

/* animate.css */
import "animate.css";

import "./assets/css/global.css";

/* 头部组件 */
import Header from "./components/Header";
Vue.component(Header.name, Header);

/* 尾部新闻组件 */
import News from "./components/News";
Vue.component(News.name, News);

/* 尾部组件 */
import Footer from "./components/Footer";
Vue.component(Footer.name, Footer);

/* 回到顶部 */
import GoTop from "./components/GoTop";
Vue.component(GoTop.name, GoTop);

Vue.config.productionTip = false;

const navList = [
  {
    name: "首页",
    path: "/home",
  },
  {
    name: "相关服务",
    path: "/service",
  },
  {
    name: "新闻动态",
    path: "/newsinformation",
  },
  {
    name: "公司介绍",
    path: "/companyintroduction",
  },
  {
    name: "工作机会",
    path: "/jobchance",
  },
  {
    name: "联系我们",
    path: "/contactus",
  }
]
router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
router.afterEach((to) => {
  const index = navList.findIndex(i => to.path.indexOf(i.path) >=0);
  sessionStorage.setItem("navIndex", index);
  store.commit('saveNavIndex', index);
})

Vue.prototype.$store = store;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
