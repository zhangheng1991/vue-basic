<template>
  <div class="header-menu">
    <el-menu
      default-active
      background-color="#4086d8"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      mode="horizontal"
      @select="handleSelect"
      @open="openMenu"
      :default-openeds="defaultOpeneds"
      :default-active="selecteKeyId"
    >
      <template v-for="(item) in menuList">
        <el-submenu v-if="item.children&&item.children.length>0" :key="item.id" :index="item.id">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{item.name}}</span>
          </template>
          <menu-sun :menuList="item.children" />
        </el-submenu>
        <el-menu-item v-else :key="item.id" :index="item.id" :parent="item.parendId">
          <!-- index:s=字符串，不要number -->
          <router-link :to="{path:item.url,query:{id:item.id,parendId:item.parendId}}">{{item.name}}</router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuSun from "./menuList.vue";
export default {
  name: "MenuSun", //必须要 递归组件的关键，并且要与引入组件的变量名称一致
  components: {
    MenuSun
  },
  props: {
    menuList: {}
  },
  data() {
    return {
      openkeys: [""],
      selectKeys: "1",
      defaultOpeneds: [],
      selecteKeyId: " "
    };
  },
  methods: {
    handleSelect(e) {
      // console.log(this);
      // console.log(e);
      // this.selectKeys=e;
      this.selecteKeyId =this.$route.query.parendId?this.$route.query.parendId: e;
      // console.log(this.$route.query.parendId);
      if (this.$route.query.parendId) {
        this.defaultOpeneds=[""];
        // console.log(11111);
        // console.log(this.selecteKeyId)
        // this.selecteKeyId = this.$route.query.parendId;
        // console.log(2222);
        this.defaultOpeneds.push(this.$route.query.parendId);
      }
      // console.log(this.defaultOpeneds);
      // console.log(this.selecteKeyId);
      // console.log(e);
      // this.openkeys.push(e)
    },
    openMenu(e) {
      console.log(e);
    }
  },
  beforeMount() {
    // console.log(this.$route);
  },
  mounted() {
    // console.log(this.$route);
    this.selecteKeyId = this.$route.query.id;
    if (this.$route.query.parendId) {
      this.selecteKeyId = this.$route.query.parendId;
      this.defaultOpeneds.push(this.$route.query.parendId);
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to.path);
      // console.log(this.$route);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>