<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
import { apiGetBaseInfo } from './api/api';
import store from './store/index'

export default {
  name: 'App',
  created() {
    // 获取公司基础信息
    apiGetBaseInfo("中瀚").then(res => {
      if (res.code >= 0) {
        store.commit('saveBaseInfo', res.data)
      }
    })
  }
}
</script>

<style>
</style>
