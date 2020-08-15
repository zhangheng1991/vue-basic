<template>
  <div class="about public-body">
    <h1 @click="handleClick">{{ name }}</h1>
    <div class="menuList">
      <menu-sun :menuList="menuList" />
    </div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>

    <el-menu
      unique-opened
      router
      :default-active="$route.path"
      class="left-menu"
      :collapse="leftMenu.isCollapse"
    >
      <component
        class="menu-item"
        v-for="(value) in leftMenu.navList"
        :key="value.title+value.url"
        :index="value.url"
        :is="(value.children&&value.children.length>0)?'el-submenu':'el-menu-item'"
      >
        <template slot="title">
          <i :class="[value.icon]"></i>
          <span>{{value.title}}</span>
        </template>
        <template v-if="value.children&&value.children.length>0">
          <el-menu-item
            class="menu-item"
            v-for="(v,i) in value.children"
            :key="v.url+i"
            :index="v.url"
          >
            <i :class="[v.icon]"></i>
            <span slot="title">{{v.title}}</span>
          </el-menu-item>
        </template>
      </component>
    </el-menu>

    
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions,mapGetters } from "vuex";
// import { mapState, mapMutations } from "vuex";
// import { mapGetters } from "vuex";//方法1
import MenuSun from "./about/menuList";
import { mapState } from "vuex"; //方法二
// import { mapState, mapMutations } from "vuex"; // 方法三;
// import { mapState, mapActions } from "vuex"; // 方法四
export default {
  name: "About",
  components: { MenuSun }, //子节点要挂在下
  computed: {
    //computed是一个计算属性,类似于过滤器,对绑定到view的数据进行处理
    //...mapGetters(["name"]) //引入仓库中要修改的值 方法一
    ...mapState({
      //引入仓库中要修改的值 方法二和方法三,方法四
      name: state => state.user.name
    })
  },
  methods: {
    // ...mapMutations("user", ["setName"]), //这个加namespaced:true，方法三
    // ...mapActions(["setNameAction"]), //这个不加加namespaced，方法四
    handleClick() {
      this.$store.dispatch("setNameAction", "张衡"); //这个加namespaced:true，方法二
      // this.$store.dispatch("user/setNameAction", "张衡"); //这个加namespaced:true，方法一
      // this.setName("邵阳"); //这个加namespaced:true，方法三
      // this.setNameAction("正恒1111"); //这个不加加namespaced:false, 方法四
    }
  },
  beforeMount() {
    // console.log(this.$route);
  },
  data() {
    return {
      ListData: [
        {
          name: 111,
          key: 111
        },
        {
          name: 222,
          key: 222,
          children: [
            {
              name: 22211,
              key: 22211
            },
            {
              name: 22212,
              key: 22212,
              children: [
                {
                  name: 222111,
                  key: 222111
                },
                {
                  name: 222122,
                  key: 222122
                }
              ]
            }
          ]
        }
      ],
      leftMenu: {
        isCollapse: false,
        navList: [
          {
            icon: "el-icon-document",
            title: "订单管理",
            url: "/OrderManage"
          },
          {
            icon: "el-icon-dish",
            title: "菜单管理",
            url: "/ProductManage"
          },
          {
            icon: "el-icon-suitcase",
            title: "店铺管理",
            url: "suibianxie",
            children: [
              {
                icon: "el-icon-tickets",
                title: "店铺资料",
                url: "/StoreProfile"
              },
              {
                icon: "el-icon-picture-outline",
                title: "轮播图管理",
                url: "/BannerPicture"
              },
              {
                icon: "el-icon-s-grid",
                title: "桌台管理",
                url: "/TableManage"
              }
            ]
          },
          {
            icon: "el-icon-setting",
            title: "账号管理",
            url: "/AccountManage"
          },
          {
            icon: "el-icon-user",
            title: "个人资料",
            url: "/PersonProfile"
          }
        ]
      },
      menuList: [
        { name: "一级菜单1", id: "1" },
        {
          name: "一级菜单2",
          id: "2",
          child: [
            { name: "二级菜单2-1", id: "2-1" },
            {
              name: "二级菜单2-2",
              id: "2-2",
              child: [{ name: "三级菜单1", id: "2-2-1" }]
            },
            {
              name: "二级菜单2-3",
              id: "2-3",
              child: [{ name: "三级菜单1", id: "2-3-1" }]
            }
          ]
        },
        {
          name: "一级菜单3",
          id: "3",
          child: [{ name: "二级菜单3-1", id: "3-1" }]
        },
        {
          name: "一级菜单4",
          id: "4",
          child: [
            {
              name: "二级菜单4-1",
              id: "4-1",
              child: [
                {
                  name: "三级菜单",
                  id: "4-1-1",
                  child: [{ name: "四级菜单", id: "4-1-1-1" }]
                },
                { name: "三级菜单", id: "4-1-2" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
 @import "./public.scss";
</style>
