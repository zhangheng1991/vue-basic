<template>
  <div id="app1" >
    <div id="nav1">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/MyTest">测试</router-link>|
      <router-link to="/MyFirst">测试子路由</router-link>
      <router-link to="/methods">方法</router-link>
      <router-link to="/muthodsOne">方法1</router-link>
      <router-link to="/muthodsTwo">方法2</router-link>
       <router-link to="/muthodsThree">方法3</router-link>
      <router-link :to="{ path: 'MyFirst', query: { id: 1 } }">
        测试子路由</router-link
      > -->
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name:"Appr",
  watch:{
     menuTree() {
      console.log(345678)
      // this.reFresh = false;
      // this.$nextTick(() => {
      //   this.reFresh = true;
      // });
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin:0px 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
