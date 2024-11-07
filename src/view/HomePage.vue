<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <div class="txt container">
                <h1>{{ item.title }}</h1>
                <h2>{{ item.titleEng }}</h2>
                <p>{{ item.content }}</p>
                <p>{{ item.contentEng }}</p>
              </div>
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
    <!-- 为什么选择我们 -->
    <WhyUs></WhyUs>
    <!-- 我们的服务 -->
     <OurServices />

    <!-- 您身边的物流专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>您身边的物流专家</h1>
        <h3>提供出色的物流服务</h3>
        <button class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';">
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
    <Coorperation />
    <!-- 关于我们 -->
    <AboutUs></AboutUs>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
import AboutUs from '../components/Home/aboutus.vue';
import WhyUs from '../components/Home/whyus.vue';
import Coorperation from '../components/Home/coorperation.vue';
import OurServices from '../components/Home/ourServices.vue';
import {
  apiGetBanner,
} from "../api/api";

export default {
  name: "HomePage",
  components: { AboutUs, WhyUs, Coorperation, OurServices },
  data() {
    return {
      swiperList: [],
      highlightList: [],
      serverList: []
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
            delay: 8000,
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
};
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  height: 90vh;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide img {
  min-width: 100%;
  min-height: 100%;
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

#swiper .banner-swiper .swiper-slide-title .txt {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  text-align: left;
  margin: 0 auto;
}

#swiper .banner-swiper .swiper-slide-title>p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
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

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #swiper .banner-swiper .swiper-slide-title .txt {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    text-align: left;
    margin: 0 auto;
    line-height: 1.1;
  }

  #swiper .banner-swiper .swiper-slide-title .txt h1 {
    font-size: 3rem;
  }

  #swiper .banner-swiper .swiper-slide-title .txt p {
    font-size: 1.75rem;
    line-height: 1.6;
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

}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
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

}
</style>
