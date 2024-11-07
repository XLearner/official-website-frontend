<template>
    <div id="ourService" class="container-fuild">
        <div class="title text-center">
            <h2>我们的服务</h2>
            <p>Our Service</p>
        </div>
        <div class="title text-center">
            <h3>工业物流</h3>
            <p>Industrial Logistics</p>
        </div>
        <div class="row ">
            <div class="ourService-container col-xs-12 col-sm-12 col-md-4" v-for="(item, index) in indServices">
                <div class="box wow slideInUp" :data-wow-delay="`${index * 0.1}s`" data-wow-iteration="1">
                    <div class="ourService-img">
                        <img class="img-responsive" :src="item.img" alt="我们的服务" />
                    </div>
                    <div class="ctn">
                        <h4 class="ourService-title">
                            {{ item.title }}
                            <small><br>{{ item.engTit }}</small>
                        </h4>
                        <p class="description">{{ clearTag(item.description) }}</p>
                        <div>
                            <span class="see-details" @click="seeDetails(item.id)">查看详情>></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 
        <div class="title text-center">
            <h3>跨境物流</h3>
            <p>International Freight</p>
        </div>
        <div class="row ">
            <div class="ourService-container col-xs-12 col-sm-12 col-md-4" v-for="(item, index) in inteService">
                <div class="box wow slideInUp" :data-wow-delay="`${index * 0.1}s`" data-wow-iteration="1">
                    <div class="ourService-img">
                        <img class="img-responsive" :src="item.img" alt="我们的服务" />
                    </div>
                    <div class="ctn">
                        <h4 class="ourService-title">
                            {{ item.title }}
                            <small><br>{{ item.engTit }}</small>
                        </h4>
                        <p class="description">{{ clearTag(item.description) }}</p>
                        <div>
                            <span class="see-details" @click="seeDetails(item.id)">查看详情>></span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="more text-center" @click="seeMoreService">
            <span>查看更多>></span>
        </div>
    </div>
</template>

<script>
import { apiGetRelative } from '../../api/api'
import defaultImg from "@/assets/img/img1.png";
import { WOW } from 'wowjs';

export default {
    name: "OurServices",
    data() {
        return {
            indServices: [],
            inteService: []
        }
    },
    created() {
        // 我们的业务
        apiGetRelative().then(res => {
            if (res.code >= 0) {
                this.$data.indServices = res.data
                    .map(item => ({
                        ...item,
                        img: item.img || defaultImg
                    }))
                    .filter(item => item.ifShow === "1");
                this.$data.inteService = res.data.map(item => ({
                    ...item,
                    img: item.img || defaultImg
                })).filter(item => item.ifShow === "1")
            }
        }).then(() => {

            const wow = new WOW();
            wow.init();
        });
    },
    methods: {
        seeDetails(id) {
            this.$router.push("/servicedetail/" + id);
            sessionStorage.setItem("navIndex", 1);
            this.$store.commit('saveNavIndex', 1);
        },
        seeMoreService() {
            this.$router.push("/service");
            sessionStorage.setItem("navIndex", 1);
            this.$store.commit('saveNavIndex', 1);
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
}

</script>

<style scoped>
/* 大数据管理系统 */
#ourService {
    padding: 100px;
    transition: all ease 0.6s;
    box-sizing: border-box;
    background: #f7f8f9;
}

.ourService-container {
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1%;
    margin-bottom: 10px;
}

.ourService-container .box {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 20px;
    box-shadow: 0 0 8px rgba(5, 5, 5, .2);
}

#ourService .ourService-img {
    box-sizing: border-box;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
}

#ourService .ourService-img img {
    min-height: 100%;
    min-width: 100%;
}

.ctn {
    padding: 0 15px;
}

.ourService-container.revert {
    flex-flow: row-reverse;
}

.ourService-container .see-details {
    cursor: pointer;
    color: rgb(71, 102, 177);
}

#ourService .ourService-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-top: 10px;
}

#ourService p {
    font-size: 14px;
    color: #333;
    line-height: 3rem;
}

#ourService .description {
    height: 3em;
    overflow: hidden;
    line-height: 1.4;
    font-weight: 300;
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


@media screen and (max-width: 768px) {

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

}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {

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
}
</style>