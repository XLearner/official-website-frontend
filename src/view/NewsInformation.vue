<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <h3>新闻动态</h3>
                <p style="color:#b2b2b2">Company News</p>
            </div>
            <div class="container-fuild">
                <div id="news_swiper" class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in topNews" :key="index"  @click="toDetail(item.id)">
                            <img class="swiper-lazy img" :data-src="item.outImg" alt="轮播图" />
                            <div class="swiper-lazy-preloader"></div>
                            <div class="swiper-slide-title">
                                <h1>{{ item.title }}</h1>
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

            <!-- 新闻列表 -->
            <div class="news-container">
                <div class="news-list">
                    <div class="news-item" v-for="(item, index) in newsList" :key="index" @click="toDetail(item.id)">
                        <div class="img"><img :src="item.outImg" alt="img"></div>
                        <div class="content">
                            <div class="tit">{{ item.title }}</div>
                            <div class="time">{{ item.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
import Swiper from "swiper";
import { apiGetNews } from '../api/api';

export default {
    name: 'NewsInformation',
    data() {
        return {
            topNews: [
            ],
            newsList: [
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
    created() {
        setTimeout(() => {
            new Swiper("#news_swiper", {
                loop: true, // 循环模式选项
                //自动播放
                autoplay: {
                    delay: 5000,
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
                    // loadPrevNext: true
                },
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true //修改swiper的父元素时，自动初始化swiper
            });
        }, 1000);
        apiGetNews().then(res => {
            const data = res.data.sort((a,b) => b.time - a.time)
            let topNews = data.slice(0, 3).map(this.handle);
            let newsList = data.slice(3).map(this.handle);
            
            this.$data.topNews = topNews;
            this.$data.newsList = newsList;
        })
    },
    methods: {
        handle(data) {
            let date = data.time;
            const year = date.slice(0, 4);
            const month = date.slice(4, 6);
            const day = date.slice(6);
            return {
                id: data.id,
                title: data.title,
                content: data.content,
                time: `${year}年${month}月${day}日`,
                outImg: data.outImg,
            }
        },
        toDetail(id) {
            this.$router.push({ path: '/news/' + id});
        }
    }
}
</script>
<style scoped>
#NewsInformation {
    padding-bottom: 100px;
}

.container-fuild {
    margin-bottom: 50px;
}

.swiper-wrapper {
    position: relative;
    height: 500px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.swiper-slide .img {
    display: block;
    width: 100%;
}

.swiper-slide-title {
    background: rgba(255, 255, 255, .6);
    padding: 10px 8px 28px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}


.news-container {
    overflow: hidden;
    margin-bottom: 0;
}

.news-container .news-item {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 20px 0;
    border: 1px solid #efefef;
    border-radius: 3px;
    cursor: pointer;
    transition: all .7s;
}

.news-container .news-item:hover {
    box-shadow: 0 0 5px #ddd;
}

.news-container .img {
    width: 200px;
    overflow: hidden;
    margin-right: 10px;
}

.news-container .img img {
    display: block;
    width: 100%;
}

.news-container .content {
    width: calc(100% - 200px);
    line-height: 1.2;
}

.news-container .content .tit {
    font-size: 20px;
    margin-bottom: 10px;
}

.news-container .content .time {
    font-size: 16px;
    color: #aaa;
}

.more {
    font-size: 25px;
    color: #707070;
}

.more>i {
    cursor: pointer;
}

@media screen and (max-width: 767px) {

    .swiper-wrapper {
        position: relative;
        height: 30rem;
    }
    .news-container>li {
        width: 100%;
    }

    .news-container>li>.content {
        width: 70%;
        text-align: left;
        float: right;
    }

    .news-container>li>.time {
        width: 30%;
        text-align: left;
        float: right;
    }

    .news-container>li>.circle {
        display: none;
    }

    .swiper-slide-title h1 {
        font-size: 2rem;
    }
    .news-container .content .tit {
        font-size: 1.6rem;
    }
}
</style>
