<template>
    <div id="news" class="bottom-new">
        <div class="container">
            <div class="head ">
                <h3 class="">中瀚物流新闻资讯</h3>
                <div class="btn ">查看更多</div>
            </div>
            <div id="news_box" class="news-scroll">
                <div class="swiper-container news-swiper hidden-xs">
                    <div class="swiper-wrapper ">
                        <div class="swiper-slide news-block" v-for="(item, index) in newsList" :key="index">
                            <div class="box">
                                <div class="time">{{ item.date }}</div>
                                <div class="tit">{{ item.title }}</div>
                                <div class="txt">{{ clearTag(item.content) }}</div>
                                <div class="btn">查看更多内容</div>
                            </div>
                        </div>
                    </div>
                    <!-- 如果需要导航按钮 -->
                    <div class="opt-btn">
                        <div class="swiper-button-prev prev-btn"></div>
                        <div class="swiper-button-next next-btn"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import { apiGetNews } from '@/api/api'

export default {
    name: "News",
    data() {
        return {
            newsList: []
        };
    },
    computed: {
        baseInfo() {
            return (this.$data.baseInfo = this.$store.state.baseInfo);
        },
        szAddr() {
            const arr = this.baseInfo.address.split('/');
            return arr.find(e => e.indexOf('深圳') >= 0)
        },
        gzAddr() {
            const arr = this.baseInfo.address.split('/');
            return arr.find(e => e.indexOf('贵州') >= 0)
        }
    },
    mounted() {


        apiGetNews().then((result) => {

            if (result.code == 0) {
                this.$data.newsList = result.data.sort((a, b) => b.time - a.time).map(e => {
                    return {
                        ...e,
                        date: this.handleDate(e)
                    }
                });
            }
        }).catch((err) => {
            console.log('err', err);
        }).then(() => {
            new Swiper(".news-swiper", {
                loop: false, // 循环模式选项
                slidesPerView: 4,
                allowTouchMove: false,
                //自动播放
                autoplay: {
                    delay: 10000,
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

    },
    methods: {
        handleDate(data) {
            let date = data.time;
            const year = date.slice(0, 4);
            const month = date.slice(4, 6);
            const day = date.slice(6);
            return `${year}-${month}-${day}`;
        },
        clearTag(tagStr) {
            const ele = document.createElement('div');
            ele.innerHTML = tagStr;
            const children = ele.childNodes;
            let str = "";
            for (let i = 0, len = children.length; i < len; i++) {
                const element = children[i];
                str += element.innerText + '\n';
            }
            return str
        }
    }
};
</script>

<style scoped>
.bottom-new {
    padding: 50px 0;
    background: #efefef;
}

.head {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box {
    background: #fff;
    padding: 20px;
    margin-right: 20px;
}

.box .time {
    line-height: 1.4;
    color: rgb(68, 98, 189);
    margin-bottom: 10px;
}

.box .tit {
    font-size: 16px;
    line-height: 1.5;
    height: 48px;
    margin-bottom: 20px;
    color: #777;
}

.box .txt {
    height: 136px;
    line-height: 1.4;
    margin-bottom: 20px;
    color: #aaa;
    font-weight: 300;
    overflow: hidden;
}

.box .btn {
    color: #999;
}

.opt-btn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
}

.prev-btn {
    position: static;
    background-size: 14px 22px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 10px;
}

.next-btn {
    position: static;
    background-size: 14px 22px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
}


@media screen and (max-width: 997px) {}
</style>