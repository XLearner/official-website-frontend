<template>
    <div id="NewsDetail">
        <div class="banner container-fuild text-center">新闻详情</div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
                    <ul class="nav nav-tabs nav-stacked center-block" id="news">
                        <p>新闻列表</p>
                        <li :class="item.id == id ? 'active' : ''" v-for="(item, index) in newsNav" :key="index">
                            <div @click="linkTo(item.id)">{{ item.title }}</div>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
                    <div class="content-block" v-show="ifShow">
                        <h2 :id="newsItem.id">
                            {{ newsItem.title }}
                            <small>/ {{ newsItem.time }}</small>
                        </h2>
                        <img class="img" :src="newsItem.outImg" alt="示例图">
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
            newsList: [
            ],
            newsNav: [],
            newsItem: {
                id: '',
                title: '',
                eng_tit: '',
                content: '',
            },
            // serviceContentList: []
        };
    },
    created() {
        apiGetNews().then(res => {
            if (res.code >= 0) {
            const data = res.data.sort((a,b) => b.time - a.time)
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
            this.newsItem = {};
            this.$router.push({ path: '/news/' + id });
            this.$data.newsItem = this.newsList.filter(ele => {
                return ele.id == id
            })[0]
            this.$data.id = id;
            this.showCtn();
        },
        showCtn() {
            this.$data.ifShow = true;
        },
        hideCtn() {
            this.$data.ifShow = false;
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

@media screen and (max-width: 767px) {
    #NewsDetail .container {
        padding-bottom: 20px;
        min-height: 500px;
    }
}
</style>

<style>
    
#NewsDetail .content-block ul, #NewsDetail .content-block ol{
    list-style: auto;
    margin-left: 20px;
}
</style>