<template>
  <div id="footer" class="container-fluid">
    <div class="container">
      <div class="content">
        <div class="left-box">
          <div class="logo">
            <img src="@/assets/img/logo.jpg" alt="logo图" />
          </div>
          <p class="title">{{ baseInfo.name }}</p>
        </div>
        <div class="right-box">
          <!-- 导航信息展示 -->
          <div class="nav"></div>

          <div class="message">
            <p class="address_tel_fax">
              <span>深圳公司地址：{{ szAddr }}</span>
            </p>
            <p>贵州公司地址：{{ gzAddr }}</p>
            <p>电话：{{ baseInfo.tel }}</p>
            <p class="email_wx">
              <span>邮箱：{{ baseInfo.email }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <p class="copy">
      <a href="https://beian.miit.gov.cn" target="_blank">黔ICP备2023017099号</a>
      <span>
        {{ baseInfo.copyright }} 2018 -
        {{ new Date().getFullYear() }} {{ baseInfo.name }}
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
      return this.$store.state.baseInfo;
    },
    szAddr() {
      if (!this.baseInfo.address) {
        return ''
      }
      const arr = this.baseInfo.address.split('/');
      return arr.find(e => e.indexOf('深圳') >= 0)
    },
    gzAddr() {
      if (!this.baseInfo.address) {
        return ''
      }
      const arr = this.baseInfo.address.split('/');
      return arr.find(e => e.indexOf('贵州') >= 0)
    }
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #f4f4f4;
  background: rgba(28, 28, 28, .9);
  overflow: hidden;
  text-align: center;
  padding: 20px 0 0px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

.right-box {
  text-align: left;
  padding-left: 100px;
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
  margin: 50px 0 0px;
  background-color: rgba(28, 28, 28, .9);
  padding: 30px 0;
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

  #footer {
    padding: 20px 20px 10px;
  }
  
  .content {
    flex-direction: column;
  }
  .right-box {
    padding: 0;
  }
}
</style>
