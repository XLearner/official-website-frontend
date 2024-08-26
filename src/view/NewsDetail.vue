<template>
    <div id="NewsDetail">
        <div class="banner container-fuild text-center">新闻详情</div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
                    <div class="nav-box" >
                        <div class="icon" @click="showList"><img src="../assets/img/list-text.png" alt=""></div>
                        <ul class="nav nav-tabs nav-stacked center-block" :class="{'show': ifShowList}" id="news">
                            <p>新闻列表</p>
                            <li :class="item.id == id ? 'active' : ''" v-for="(item, index) in newsNav" :key="index">
                                <div @click="linkTo(item.id)">{{ item.title }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
                    <div class="content-block" v-show="ifShow">
                        <h2 :id="newsItem.id">
                            {{ newsItem.title }}
                            <small>/ {{ newsItem.time }}</small>
                        </h2>
                        <img v-show="ifLoaded" class="img" :src="newsItem.outImg" alt="示例图" @load="picReady">
                        <div v-show="!ifLoaded" class="loading-img"><img src="../assets/img/img_oc.png" alt="占位图"></div>
                        <div class="txt" v-html="newsItem.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
import { apiGetNews } from "../api/api";

export default {
    name: "NewsDetail",
    data() {
        return {
            id: "section-1",
            ifShow: false,
            ifShowList: false,
            newsList: [
            ],
            newsNav: [],
            newsItem: {
                id: '',
                title: '',
                eng_tit: '',
                content: '',
            },
            ifLoaded: false
            // serviceContentList: []
        };
    },
    created() {
        apiGetNews().then(res => {
            if (res.code >= 0) {
                const data = res.data.sort((a, b) => b.time - a.time)
                this.$data.newsNav = data.map(item => ({
                    id: item.id,
                    title: item.title
                }));
                this.$data.newsList = data;
                this.$data.newsItem = data.filter(ele => ele.id == this.$route.params.path)[0];
                this.showCtn();
            }
        });
    },
    mounted() {
        this.id = this.$route.params.path;
        if (this.id) {
            // var top = document.getElementById(this.id).offsetTop;
            // $(window).scrollTop(top + 300);
            // $("#news").affix({
            //     offset: {
            //         top: 300
            //     }
            // });
        }
        var wow = new WOW();
        wow.init();
    },
    methods: {
        linkTo(id) {
            this.hideCtn();
            this.$data.newsItem = {};

            this.$router.push({ path: '/news/' + id });
            this.$data.newsItem = this.newsList.filter(ele => {
                return ele.id == id
            })[0]
            this.$data.id = id;
            this.showCtn();
            this.ifShowList = false;
        },
        showCtn() {
            this.$data.ifShow = true;
        },
        hideCtn() {
            this.$data.ifShow = false;
            this.$data.ifLoaded = false;
        },
        picReady() {
            this.$data.ifLoaded = true;
            console.log('ready')
        },
        showList() {
            this.ifShowList = !this.ifShowList;
        }
    }
};
</script>
<style scoped>
.banner {
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url("../assets/img/banner_2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}

#NewsDetail .container {
    padding-bottom: 20px;
    min-height: 500px;
}

ul.nav-tabs {
    width: 200px;
    margin-top: 40px;
    border-radius: 4px;
    background: #fff;
    z-index: 99999;
    border: 1px solid #474747;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}

ul.nav-tabs li {
    text-align: center;
    margin: 0;
    border-top: 1px solid #474747;
}

ul.nav-tabs p {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background: #474747;
    margin: 0;
    padding: 10px 0;
}

ul.nav-tabs li:first-child {
    border-top: none;
}

ul.nav-tabs li div {
    margin: 0;
    padding: 8px 16px;
    border-radius: 0;
    cursor: pointer;
}

ul.nav-tabs li.active div,
ul.nav-tabs li div:hover {
    color: #fff;
    background: #474747;
}

ul.nav-tabs li:first-child div {
    border-radius: 4px 4px 0 0;
}

ul.nav-tabs li:last-child div {
    border-radius: 0 0 4px 4px;
}

ul.nav-tabs.affix {
    top: 30px;
}
.icon {
    display: none;
}

.content-block {
    margin: 50px 0;
}

.content-block>h2 {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
}

.content-block img {
    max-width: 100%;
}

.content .img {
    margin-bottom: 10px;
}

.content .txt {
    font-size: 14px;
    line-height: 1.5;
}

@media screen and (max-width: 992px) {
    #NewsDetail .container {
        padding-bottom: 20px;
        min-height: 500px;
    }

    .nav-box {
        position: fixed;
        z-index: 10;
        top: 4.8rem;
    }

    .icon {
        display: block;
        position: absolute;
        width: 3.5rem;
        height: 3.5rem;
        padding: 8px;
        top: 4rem;
        left: 0;
        border-radius: 50%;
        background: rgba(233, 233, 233, .3);
    }
    .icon img {
        display: block;
        width: 100%;
    }

    ul.nav-tabs {
        height: 60rem;
        overflow: auto;
        display: none;
    }
    ul.nav-tabs.show {
        display: block;
    }
}

.loading-img {
    position: relative;
    overflow: hidden;
}

.loading-img::after {
    content: "";
    display: block;
    width: 80px;
    height: 1500px;
    background-color: rgba(255, 255, 255, .7);
    position: absolute;
    box-shadow: 0 0 25px #fff;
    left: 0;
    top: 0;
    animation-duration: 2s;
    animation-name: loadImg;
    animation-iteration-count: infinite;
}

@keyframes loadImg {
    from {
        transform: rotate(-45deg) translate(-120px, -210px);
    }

    to {
        transform: rotate(-45deg) translate(1260px, 180px)
    }
}
</style>

<style>
#NewsDetail .content-block ul,
#NewsDetail .content-block ol {
    list-style: auto;
    margin-left: 20px;
}
</style>