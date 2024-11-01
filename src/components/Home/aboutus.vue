<template>
    <div id="AboutUs" class="about-us">
        <div class="container">
            <!-- <div class="AboutUs-title text-center">
                <p>关于我们</p>
                <p>ABOUT US</p>
            </div> -->
            <div class="content-box">
                <div class="txt-container">
                    <div class="title">关于 {{ baseInfo.name }}</div>
                    <div class="txt">{{ baseInfo.description }}</div>
                    <div class="detail-btn btn">
                        <span @click="seeMoreCompanyInfo">查看详情</span>
                    </div>
                </div>
                <div class="img-box">
                    <div class="txt">{{ baseInfo.description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AboutUs",
    computed: {
        baseInfo() {
            return this.$store.state.baseInfo;
        }
    },
    methods: {

        seeMoreCompanyInfo() {
            this.$router.push("companyintroduction");
        }
    }
}
</script>

<style scoped>
#AboutUs {
    background: #efefef;
    padding: 480px 100px 0;
    background-image: url('http://api.zhonghanlogistics.cn/photo/files-1711698864562.jpg');
    background-size: 100%;
}

#AboutUs .AboutUs-title p {
    margin-bottom: 10px;
}

#AboutUs .AboutUs-title {
    margin-bottom: 50px;
}

#AboutUs .AboutUs-title p:nth-of-type(1) {
    font-size: 30px;
    font-weight: 500;
}

#AboutUs .AboutUs-title p:nth-of-type(2) {
    font-size: 14px;
}

#AboutUs .content-box {
    display: flex;
    box-shadow: 0 0 10px #cdcdcd;
    background: #fff;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    padding: 10px;
}

#AboutUs .txt-container {
    width: 40%;
    box-sizing: border-box;
    padding: 30px;
}

#AboutUs .txt-container .title {
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    font-size: 24px;
    border-bottom: 1px #cdcdcd solid;
    position: relative;
}

#AboutUs .txt-container .txt {
    color: #999;
    line-height: 2;
    font-size: 16px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    word-wrap: break-word;
    height: 200px;
}

#AboutUs .img-box {
    width: 60%;
    border-left: 1px solid #cdcdcd;
    overflow: hidden;
    height: 380px;
    padding: 20px;
}

#AboutUs .img-box .txt {
    color: #999;
    line-height: 2;
    font-size: 14px;
    font-weight: 400;
}

.detail-btn {
    position: relative
}
.detail-btn::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -3px;
    top: 7px;
    border: 8px solid transparent;
    border-left-color: rgb(30, 44, 84);
    
}

#AboutUs .detail-btn span {
    cursor: pointer;
}

@media screen and (max-width: 768px) {

  #AboutUs {
    padding: 20px 0;
  }
  #AboutUs .content-box {
    flex-direction: column;
  }
  #AboutUs .txt-container {
    width: 100%;
  }
  #AboutUs .txt-container .title {
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  #AboutUs .img-box {
    width: 100%;
    height: 300px
  }
}
</style>