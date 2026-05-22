<template>

    <div id="whyChooseUs" class="conatiner-fuild">
        <div class="container">
            <div class="whyChooseUs-title text-center">
                <p>为什么选择我们的服务</p>
                <p>THE REASON TO CHOOSING US</p>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 server-wrapper" v-for="(item, index) in advantageList"
                    :key="index">
                    <div class="server-block wow slideInUp"
                        onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
                        onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'">
                        <img class="center-block" :src="$imageUrl(item.img)" alt="logo" />
                        <p class="text-center">{{ item.title }}</p>
                        <div class="text-center" v-html="item.description" onmouseenter="this.style.color='#28f'"
                            onmouseleave="this.style.color='#ccc'"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiGetAdvantage } from '../../api/api'

export default {
    name: "WhyUs",
    data() {
        return {
            advantageList: []
        }
    },
    created() {

        /* 我们的优势 */
        apiGetAdvantage().then(res => {
            if (res.code >= 0) {
                this.$data.advantageList = res.data.filter(item => item.ifShow === "1");
            }
        });
    }
}

</script>

<style scoped>
/* 为什么选择我们 */
#whyChooseUs {
    padding: 100px;
    background: #fff;
}

#whyChooseUs .row {
    display: flex;
    flex-flow: wrap;
}

#whyChooseUs .row>div {
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
    padding: 30px 20px;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
    height: 100%;
}

#whyChooseUs .server-block img {
    /* width: 48px; */
    height: 150px;
}

#whyChooseUs .server-block>p {
    font-size: 20px;
    margin: 30px 0;
}

#whyChooseUs .server-block>div {
    color: #ccc;
    font-weight: 400;
}

@media screen and (max-width: 768px) {

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
        height: 100px;
    }

    #whyChooseUs .server-block>p {
        font-size: 20px;
        margin: 8px 0;
    }

    #whyChooseUs .server-block>div {
        color: #ccc;
    }

}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {

    #whyChooseUs {
        padding: 20px 0;
    }
}
</style>

<style>
/* v-html 富文本内容基础样式还原 */
#whyChooseUs .server-block p {
    margin: 1em 0;
    line-height: 1.6;
}
#whyChooseUs .server-block ul,
#whyChooseUs .server-block ol {
    list-style: auto;
    margin: 1em 0;
    padding-left: 40px;
}
#whyChooseUs .server-block ul { list-style-type: disc; }
#whyChooseUs .server-block ol { list-style-type: decimal; }
#whyChooseUs .server-block li {
    display: list-item;
    margin: 0.3em 0;
}
#whyChooseUs .server-block h1,
#whyChooseUs .server-block h2,
#whyChooseUs .server-block h3,
#whyChooseUs .server-block h4,
#whyChooseUs .server-block h5,
#whyChooseUs .server-block h6 {
    margin: 0.83em 0;
    font-weight: bold;
}
#whyChooseUs .server-block strong,
#whyChooseUs .server-block b {
    font-weight: bold;
}
#whyChooseUs .server-block em,
#whyChooseUs .server-block i {
    font-style: italic;
}
#whyChooseUs .server-block a {
    color: #28f;
    text-decoration: underline;
}
#whyChooseUs .server-block img {
    display: inline-block;
    max-width: 100%;
    height: auto;
}
</style>