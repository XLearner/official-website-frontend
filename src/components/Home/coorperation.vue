<template>

    <div id="customer" class="container-fuild">
        <div class="container customer-container">
            <p class="customer-title text-center">合作客户</p>
            <div class="swiper-container customer-swiper hidden-xs">
                <div class="swiper-wrapper">
                    <div class="swiper-slide customer-block" v-for="(item, index) in customerList" :key="index">
                        <div class="box">
                            <div class="customer-logo">
                                <img class="center-block" :src="item.logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 如果需要导航按钮 -->
                <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { apiGetCustom } from '../../api/api'

import Swiper from 'swiper'

export default {
    name: "Coorperation",
    data() {
        return {
            customerList: [],
        }
    },
    created() {

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
    }
}

</script>

<style scoped>
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



@media screen and (max-width: 768px) {

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

    #customer .customer-block>div {
        padding: 30px 0;
    }


}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {

    #customer .customer-title {
        font-size: 24px;
    }
}
</style>