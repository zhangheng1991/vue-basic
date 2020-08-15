<template>
  <div class="public-body">
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "carousel",
  components: {},
  computed: {},
  methods: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// .el-carousel__item h3 {
//     color: #475669;
//     font-size: 18px;
//     opacity: 0.75;
//     line-height: 300px;
//     margin: 0;
//   }

//   .el-carousel__item:nth-child(2n) {
//     background-color: #99a9bf;
//   }

//   .el-carousel__item:nth-child(2n+1) {
//     background-color: #d3dce6;
//   }
</style>