<template>
  <div v-if="reFresh" class="public-body">
    <i class="el-icon-zoom-out" />
    <h1>{{ sex }}</h1>
    <span
      v-for="(item,index) in BackData"
      :key="index"
      @click="handclick(item,index)"
    >{{item.title}}</span>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "muthodsThree",
  computed: {
    ...mapState({
      sex: state => state.muthodsThree.sex
    })
  },
  data() {
    return {
      BackData: [
        {
          title: "王小二1",
          key: "111"
        },
        {
          title: "张三2",
          key: "222"
        },
        {
          title: "李四3",
          key: "333"
        },
        {
          title: "马六3",
          key: "444"
        },
        {
          title: "虎二4",
          key: "5555"
        },
        {
          title: "刘五6",
          key: "666"
        }
      ],
      reFresh: true,
      menuTree: []
    };
  },
  methods: {
    ...mapActions(["setSexActions"]),
    handclick(obj) {
      // console.log(obj.title);
      this.setSexActions(obj.title);
    }
  },
  watch: {//监听时间添加重置
    menuTree() {
      this.reFresh = false;
      this.$nextTick(() => {
        this.reFresh = true;
      });
    }
  },
  beforeCreate() {
    // console.log(111);
  },

  created() {
    // console.log(222);
  },
  beforeMount() {
    // console.log(this.$route);
    // console.log(333);
  },
  mounted() {
    // console.log(444);
  },
  beforeUpdate() {
    // console.log(555);
  },
  updated() {
    // console.log(666);
  },
  beforeDestroy() {
    // console.log(777);
  },

  destroyed() {
    this.setSexActions("men");
    // console.log(888);
  }
};
</script>
<style lang="scss" scoped>
 @import "../public.scss";
</style>