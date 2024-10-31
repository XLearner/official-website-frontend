<template>
    <div id="ourService" class="container-fuild">
        <div class="title text-center">
            <p>我们的服务</p>
            <p>Our Service</p>
        </div>
        <div class="row ourService-container" v-for="(item, index) in highlightList"
            :class="{ revert: index % 2 === 1 }">
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
</template>

<script>
import { apiGetRelative } from '../../api/api'
import defaultImg from "@/assets/img/img1.png";

export default {
    name: "OurServices",
    data() {
        return {
            highlightList: [],
        }
    },
    created() {

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

    },
    methods: {
        seeDetails(id) {
            this.$router.push("/servicedetail/" + id);
            sessionStorage.setItem("navIndex", 1);
            this.$store.commit('saveNavIndex', 1);
        },
        seeMoreService() {
            this.$router.push("/service");
        },
    }
}

</script>

<style scoped>
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