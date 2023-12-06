<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div class="JobChance-container wow pulse" v-for="item in recruitList">
        <h2>{{ item.name }}</h2>
        <p class="stit">岗位职责</p>
        <div>
          <p v-for="i in item.jobDesc.split('\n')">{{ i }}</p>
        </div>
        <p class="stit">任职要求</p>
        <div>
          <p v-for="i in item.requirement.split('\n')">{{ i }}</p>
        </div>

        <button
          class="center-block btn btn-warning btn-lg"
          @click="() => submitRecruit(item.name)"
        >
          投递简历
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import { apiGetRecruit } from "../api/api";

export default {
  name: "JobChance",
  data() {
    return {
      recruitList: []
    };
  },
  computed: {
    email() {
      const email = this.$store.state.baseInfo.email;
      return `mailto:${email}?subject=求职简历-`;
    }
  },
  created() {
    apiGetRecruit().then(res => {
      if (res.code >= 0) {
        this.recruitList = res.data;
      }
    });
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    submitRecruit(name) {
      window.open(this.email + name);
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
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container .stit {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.JobChance-container ol {
  list-style-type: decimal;
  padding-left: 30px;
}
.JobChance-container ol > li {
  font-size: 14px;
  line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>
