<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo.jpg" alt="logo图" />
    </div>
    <p class="title">贵州中瀚物流服务有限公司</p>
    <p class="address_tel_fax">
      <span>地址：{{ baseInfo.address }}</span>
      <br />
      <span>Tel：{{ baseInfo.tel }}</span>
    </p>
    <p class="email_wx">
      <span>邮箱：{{ baseInfo.email }}</span>
    </p>
    <p class="copy">
      <a href="https://beian.miit.gov.cn" target="_blank">黔ICP备2023017099号</a>

      <span>
        {{ baseInfo.copyright }} 2018 -
        {{ new Date().getFullYear() }} 贵州中瀚物流服务有限公司
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    baseInfo() {
      return (this.$data.baseInfo = this.$store.state.baseInfo);
    }
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #f4f4f4;
  background: rgba(22, 30, 50, 1);
  overflow: hidden;
  text-align: center;
  padding: 20px 0 10px;
}
.logo {
  width: 200px;
  height: 45px;
  margin: 50px auto 20px;
  display: flex;
  justify-content: center;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #f4f4f4;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #f4f4f4;
  font-size: 14px;
}
.copy {
  color: #f4f4f4;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>
