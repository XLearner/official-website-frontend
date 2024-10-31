<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <News v-if="navIndex != 2"></News>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
import { apiGetBaseInfo } from './api/api';
import store from './store/index'

export default {
  name: 'App',
  computed: {
    navIndex() {
      return this.$store.state.navIndex;
    }
  },
  created() {
    // 获取公司基础信息
    apiGetBaseInfo("中瀚").then(res => {
      if (res.code >= 0) {
        store.commit('saveBaseInfo', res.data)
      }
    })

    const navIndex = sessionStorage.getItem('navIndex');
    this.$store.commit('saveNavIndex', navIndex);
  }
}
</script>

<style>
</style>
