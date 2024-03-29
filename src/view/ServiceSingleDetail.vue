<template>
    <div id="ServiceDetail">
        <div class="banner container-fuild text-center">相关服务</div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
                    <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
                        <p>特色服务</p>
                        <li :class="item.id == id ? 'active' : ''" v-for="(item, index) in serviceNavList" :key="index">
                            <div @click="linkService(item.id)">{{ item.title }}</div>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
                    <div class="content-block" v-show="ifShow">
                        <h2 :id="serviceItem.id">
                            {{ serviceItem.title }}
                            <small>/ {{ serviceItem.engTit }}</small>
                        </h2>
                        <div v-html="serviceItem.description"></div>
                        <img :src="serviceItem.img" alt="示例图">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
import { apiGetRelative } from "../api/api";

export default {
    name: "ServiceDetail",
    data() {
        return {
            id: "section-1",
            ifShow: false,
            serviceNavList: [
                // {
                //   id: "section-1",
                //   title: "软件定制开发"
                // },
                // {
                //   id: "section-2",
                //   title: "IT外包服务"
                // },
                // {
                //   id: "section-3",
                //   title: "网上商城建设"
                // },
                // {
                //   id: "section-4",
                //   title: "iOS应用定制开发"
                // }
            ],
            serviceItem: {
                id: '',
                title: '',
                eng_tit: '',
                content: '',
            },
            serviceContentList: []
        };
    },
    created() {
        apiGetRelative().then(res => {
            if (res.code >= 0) {
                this.$data.serviceNavList = res.data.map(item => ({
                    id: item.id,
                    title: item.title
                }));
                this.$data.serviceContentList = res.data;
                this.$data.serviceItem = res.data.filter(ele => ele.id == this.$route.params.path)[0];
                this.showCtn();
            }
        });
    },
    mounted() {
        this.id = this.$route.params.path;
        if (this.id) {
            var top = document.getElementById(this.id).offsetTop;
            $(window).scrollTop(top + 300);
            $("#myNav").affix({
                offset: {
                    top: 300
                }
            });
        }
        var wow = new WOW();
        wow.init();
    },
    methods: {
        linkService(id) {
            this.hideCtn();
            this.$router.push({ path: '/servicedetail/' + id });
            this.$data.serviceItem = this.serviceContentList.filter(ele => {
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

#ServiceDetail .container {
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
</style>

<style>
    
#ServiceDetail .content-block ul, #ServiceDetail .content-block ol{
    list-style: auto;
    margin-left: 20px;
}
</style>