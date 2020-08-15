<template>
  <div id="app">
    <div id="nav">
      <menu-sun :menuList="DataList" />
      <span class="username">{{username}}</span>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/MyTest">测试</router-link>|
      <router-link to="/MyFirst">测试子路由</router-link>
      <router-link to="/methods">方法</router-link>
      <router-link to="/muthodsOne">方法1</router-link>
      <router-link to="/muthodsTwo">方法2</router-link>
      <router-link to="/muthodsThree">方法3</router-link>
      <router-link :to="{ path: 'MyFirst', query: { id: 1 } }">测试子路由</router-link>-->
      <!-- <router-link v-for="(item,index) in DataList" :to="item.url">{{item.name}}</router-link> -->
      <!-- <router-link v-for="(item,index) in DataList" :to="{ path: item.url, query: { id: item.id } }">{{item.name}}</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
import { UserMenu } from "../api/index";
import MenuSun from "./menuList";
export default {
  name: "AppOne",
  components: {
    MenuSun
  },
  data() {
    return {
      DataList: [], //菜单
      username: JSON.parse(window.sessionStorage.getItem("userInfo"))
        ? JSON.parse(window.sessionStorage.getItem("userInfo")).username
        : ""
    };
  },
  mounted() {
    // console.log(444);
    // console.log(JSON.parse(window.sessionStorage.getItem("userInfo")).username)
    UserMenu().then(response => {
      // console.log(response);
      if (response.status == 200 && window.sessionStorage.getItem("userInfo")) {
        // console.log(window.sessionStorage.getItem("userInfo"));
        // &&window.sessionStorage.getItem("userInfo").username
        // this.$router.push({ path: "/about", query: { id: "1" } }); //拼接到URL地址后面页面刷新参数不会丢失
        // // this.$router.push({ name: "about", query: { id: "1" } }); //参数不拼接到URL后面，页面数信会丢失
        this.DataList = response.data;
        // console.log(this.DataList);
      } else {
        this.$router.push("user/login");
      }
      // this.list.unshift(this.temp)
      // this.dialogFormVisible = false
      // this.$notify({
      //   title: "Success",
      //   message: "Created Successfully",
      //   type: "success",
      //   duration: 2000
      // });
    });
    // handLout() {

    // }
  },
  beforeMount() {
    // console.log(1111 + "3333333");
    UserMenu().then(response => {
      // console.log(response);

      if (response.status == 200) {
        // &&window.sessionStorage.getItem("userInfo").username
        // this.$router.push({ path: "/about", query: { id: "1" } }); //拼接到URL地址后面页面刷新参数不会丢失
        // // this.$router.push({ name: "about", query: { id: "1" } }); //参数不拼接到URL后面，页面数信会丢失
        this.DataList = response.data;
      } else {
        this.$router.push("user/login");
      }
      // this.list.unshift(this.temp)
      // this.dialogFormVisible = false
      // this.$notify({
      //   title: "Success",
      //   message: "Created Successfully",
      //   type: "success",
      //   duration: 2000
      // });
    });
  },
  // watch: {

  //   menuTree() {
  //     // console.log(this.$route)
  //     this.reFresh = false;
  //     this.$nextTick(() => {
  //       this.reFresh = true;
  //     });
  //   }
  // }
  watch: {
    $route(to, from) {
      // console.log(to.path);
    }
  }
};
</script>
<style lang="scss" >
@import "./style.scss";
</style>
