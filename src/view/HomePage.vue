<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiperList"
            :key="index"
          >
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{ item.title }}</h1>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>
    </div>
    <!-- 我们的服务 -->
    <div id="ourService" class="container-fuild">
      <div class="title text-center">
        <p>我们的服务</p>
        <p>Our Service</p>
      </div>
      <div
        class="row ourService-container"
        v-for="(item, index) in highlightList"
        :class="{ revert: index % 2 === 1 }"
      >
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn ourService-img">
          <img class="img-responsive" :src="item.img" alt="我们的服务" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 fl">
          <h2 class="ourService-title">
            {{ item.title }}
            <small>/ {{ item.engTit }}</small>
          </h2>
          <p class="description" v-html="item.description"></p>
          <div>
            <span class="see-details" @click="seeDetails(item.id)">查看详情>></span>
          </div>
        </div>
      </div>
      <div class="more text-center" @click="seeMoreService">
        <span>查看更多>></span>
      </div>
    </div>
    <!-- 您身边的物流专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>您身边的物流专家</h1>
        <h3>提供出色的物流服务</h3>
        <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >
          联系我们
        </button>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 合作客户 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">合作客户</p>
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item, index) in customerList"
              :key="index"
            >
              <div class="box">
                <div class="customer-logo">
                  <img class="center-block" :src="item.logo" alt="logo" />
                </div>
                <!-- <div class="customer-yh">
                  <img src="@/assets/img/yinhao.png" alt="引号" />
                </div>
                <div class="customer-content1">
                  <small>{{ item.description }}</small>
                </div>
                <div class="customer-content2">{{ item.title }}</div> -->
              </div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
        <!-- <div class="row visible-xs customer-block">
          <div
            class="col-xs-12"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo" />
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号" />
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">
              <small>{{ item.title }}</small>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们的服务</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item, index) in advantageList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.img" alt="logo" />
              <p class="text-center">{{ item.title }}</p>
              <div
                class="text-center"
                v-html="item.description"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div id="AboutUs" class="conatiner-fuild">
      <div class="container">
        <div class="AboutUs-title text-center">
          <p>关于我们</p>
          <p>ABOUT US</p>
        </div>
        <div class="content-box">
          <div class="txt-container">
            <div class="title">{{ baseInfo.name }}</div>
            <div class="txt">{{ baseInfo.description }}</div>
            <div class="detail-btn">
              <span @click="seeMoreCompanyInfo">查看详情</span>
            </div>
          </div>
          <div class="img-box">
            <img :src="baseInfo.descImg" alt="公司图片" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
import defaultImg from "@/assets/img/img1.png";
import {
  apiGetBanner,
  apiGetRelative,
  apiGetCustom,
  apiGetAdvantage
} from "../api/api";

export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [],
      highlightList: [],
      customerList: [],
      advantageList: [],
      serverList: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "核心优势1",
          content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "核心优势2",
          content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          logo: require("@/assets/img/qq.png"),
          title: "核心优势3",
          content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "核心优势4",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        }
      ]
    };
  },
  created() {
    /* banner-swiper */
    apiGetBanner()
      .then(res => {
        if (res.code >= 0) {
          this.$data.swiperList = res.data.map(item => ({
            img: item.imgurl,
            title: item.title,
            content: item.description
          }));
        } else {
          this.$data.swiperList = [
            {
              img: require("@/assets/img/banner1.png"),
              path: "",
              title: "您身边的IT专家1",
              content:
                "宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介"
            }
          ];
        }
      })
      .then(() => {
        new Swiper(".banner-swiper", {
          loop: true, // 循环模式选项
          effect: "fade",
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          // 延迟加载
          lazy: {
            loadPrevNext: true
          },
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true //修改swiper的父元素时，自动初始化swiper
        });
      });

    // 我们的业务
    apiGetRelative().then(res => {
      if (res.code >= 0) {
        this.$data.highlightList = res.data
          .map(item => ({
            ...item,
            img: item.img || defaultImg
          }))
          .filter(item => item.ifShow === "1");
      }
    });

    // 合作客户
    /* customer-swiper */
    apiGetCustom()
      .then(res => {
        if (res.code >= 0) {
          this.$data.customerList = res.data.filter(
            item => item.ifShow === "1"
          );
        }
      })
      .then(() => {
        new Swiper(".customer-swiper", {
          loop: true, // 循环模式选项
          slidesPerView: 3,
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true //修改swiper的父元素时，自动初始化swiper
        });
      });

    /* 我们的优势 */
    apiGetAdvantage().then(res => {
      if (res.code >= 0) {
        this.$data.advantageList = res.data.filter(item => item.ifShow === "1");
      }
    });
  },
  computed: {
    baseInfo() {
      return this.$store.state.baseInfo;
    }
  },
  mounted() {
    console.log(this.baseInfo);
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  },
  methods: {
    seeDetails(id) {
      this.$router.push("/servicedetail/"+id);
    },
    seeMoreService() {
      this.$router.push("/service");
    },
    seeMoreCompanyInfo() {
      this.$router.push("companyintroduction");
    }
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  height: 600px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide img {
  width: 100%;
}

#swiper .banner-swiper .swiper-slide {
  position: relative;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 大数据管理系统 */
#ourService {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#ourService .title {
  margin-bottom: 50px;
}

.ourService-container {
  margin-bottom: 80px;
  display: flex;
  align-items: center;
}

.ourService-container.revert {
  flex-flow: row-reverse;
}

.ourService-container .see-details {
  cursor: pointer;
  color: rgb(71, 102, 177);
}

#ourService .ourService-img {
  box-sizing: border-box;
  padding: 0 70px;
}

#ourService .ourService-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#ourService p {
  font-size: 14px;
  color: #333;
  line-height: 3rem;
}

#ourService .description {
  height: 7em;
  overflow: hidden;
}

#ourService .title p:nth-child(1) {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
}

#ourService .title p:nth-child(2) {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}

#ourService .ourService-device {
  margin: 50px 0 20px;
}

#ourService .more {
  cursor: pointer;
  font-size: 16px;
  color: rgb(71, 102, 177);
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

#customer .customer-block {
  background: #fff;
  padding: 30px;
}

#customer .customer-logo img {
  height: 138px;
  border: 1px solid #ccc;
}

#customer .customer-yh img {
  width: 34px;
  height: 34px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-content2 {
  padding-top: 20px;
}

/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}

#whyChooseUs .row {
  display: flex;
  flex-flow: wrap;
}

#whyChooseUs .row > div {
  margin-bottom: 20px;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 30px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
  height: 100%;
}

#whyChooseUs .server-block img {
  /* width: 48px; */
  height: 100px;
}

#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}

#AboutUs {
  background: #efefef;
  padding: 100px;
}

#AboutUs .AboutUs-title p {
  margin-bottom: 10px;
}

#AboutUs .AboutUs-title {
  margin-bottom: 50px;
}

#AboutUs .AboutUs-title p:nth-of-type(1) {
  font-size: 30px;
  font-weight: 500;
}

#AboutUs .AboutUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#AboutUs .content-box {
  display: flex;
  box-shadow: 0 0 10px #cdcdcd;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}

#AboutUs .txt-container {
  width: 40%;
  box-sizing: border-box;
  padding: 30px;
}

#AboutUs .txt-container .title {
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  font-size: 24px;
  border-bottom: 1px #cdcdcd solid;
  position: relative;
}

#AboutUs .txt-container .txt {
  color: #999;
  line-height: 2;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  word-wrap: break-word;
  height: 200px;
}

#AboutUs .img-box {
  width: 60%;
  border-left: 1px solid #cdcdcd;
  overflow: hidden;
  height: 380px;
}
#AboutUs .img-box img {
  height: 100%;
}
#AboutUs .detail-btn span {
  cursor: pointer;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #swiper .banner-swiper .swiper-slide-title > h1 {
    font-size: 3rem;
  }

  #swiper .banner-swiper .swiper-slide-title > p {
    font-size: 1.75rem;
    line-height: 1.6;
  }

  #ourService {
    padding: 30px;
  }

  #ourService .ourService-img {
    padding: 0;
  }

  #ourService .ourService-title {
    font-size: 20px;
  }

  #ourService .ourService-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 10px;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }

  #AboutUs {
    padding: 20px 0;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #ourService {
    padding: 60px;
  }

  #ourService .ourService-img {
    padding: 0;
  }

  #ourService .ourService-title {
    font-size: 30px;
  }

  #ourService .ourService-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>
