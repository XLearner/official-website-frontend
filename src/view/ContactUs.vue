<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn">
              <img src="../assets/img/guizhou_addr.png" />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn">
              <img src="../assets/img/shenzhen_addr.png" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10 col-xs-12">
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="请输入名字"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  <input
                    v-model="form.email"
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="请输入邮箱"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  <input
                    v-model="form.tel"
                    type="text"
                    class="form-control"
                    id="tel"
                    placeholder="请输入电话"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">内容</label>
                <div class="col-sm-10">
                  <textarea
                    v-model="form.content"
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="请输入内容"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="button"
                    class="btn btn-default btn-block"
                    @click="submit"
                  >
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
// import BMap from "BMap";
import { apiSubmitContact } from "../api/api";

export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        tel: "",
        content: ""
      }
    };
  },
  mounted() {
    // var map = new BMap.Map("map"); // 创建地图实例
    // var point = new BMap.Point(106.6196, 26.656531); // 创建点坐标
    // map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // var marker = new BMap.Marker(point); // 创建标注
    // map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "贵州中瀚物流服务有限公司" // 信息窗口标题
    };
    // var infoWindow = new BMap.InfoWindow("腾祥迈德国际A3栋8层3号", opts); // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  },
  methods: {
    submit() {
      if (Object.values(this.form).includes("")) {
        alert("参数填写不完整");
        return;
      }
      apiSubmitContact(this.form).then(res => {});
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
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
  overflow: hidden;
}
#map img {
  display: block;
  width: 100%;
}
.row {
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 20px;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>
