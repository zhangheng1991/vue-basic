<template>
  <div class="MyTest public-body">
    我是sore默认值：{{ test }}{{ tname }}
    <div>啦啦啦德玛西亚</div>
    <MyChild :title="ctitle" @childFunc="childFunction"></MyChild>
    <ul>
      <li
        v-for="(item, index) in Tdata"
        :key="index"
        @click="myFunc(item, index)"
      >
        <span>{{ item.title }}</span>
        <span>{{ item.key }}</span>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
import { login } from "../api/index";
import MyChild from "./MyTest/MyChildren";
// import { mapGetters } from "vuex"; //方法1
// import { mapState } from "vuex";////方法2
// import { mapState, mapMutations } from "vuex";//方法三
import { mapState, mapActions } from "vuex"; //namespaced:false

export default {
  components: { MyChild }, //子节点要挂在下
  name: "MyTest",
  computed: {
    // ...mapGetters(["test"]) //方法1
    ...mapState({
      //方法2，方法3tname
      test: state => state.tag.test,
      tname: state => state.tag.tname
    })
  },
  data() {
    return {
      Tdata: [
        {
          title: "王小二",
          key: "111"
        },
        {
          title: "张三",
          key: "222"
        },
        {
          title: "李四",
          key: "333"
        },
        {
          title: "马六",
          key: "444"
        },
        {
          title: "虎二",
          key: "5555"
        },
        {
          title: "刘五",
          key: "666"
        }
      ],
      ctitle: "初始值"
    };
  },
  // beforeCreate: function() {
  //   // console.log("Before Create");
  //   // var n = 999;
  //   // function f1() {
  //   //   // alert(n);
  //   //   console.log(n);
  //   // }
  //   // f1();
  // },
  methods: {
    // ...mapMutations("tag", ["setNameTest"]), //这个加namespaced:true，方法三
    ...mapActions(["setNameActions", "setNameActionsT"]), //方法四
    GetData() {
      login().then(response => {
        // console.log(response);
        this.id = response.data;
      });
    },
    childFunction: function(params) {
      // console.log(params);
    },

    myFunc(obj) {
      // this.$store.dispatch("tag/setNameActions", obj.title); //方法1
      // this.$store.dispatch("setNameActions", obj.title);//方法2
      // this.setNameTest(obj.title);//方法三
      this.setNameActions(obj.title); //方法四
      this.setNameActionsT(obj.title); //方法四
      // console.log(this.$refs.test.title);
      // // this.$refs.test.MyFunction1(); //父节点触发子节点的事件
      // console.log(obj);
      this.ctitle = obj.title;
      // this.$refs.test.title = "重置";
    }
  },
  created: function() {
    // this.GetData();
    // console.log("Created");
  },
  beforeMount(){
    // console.log(this);
    // console.log(this.$route);
    // console.log(this.$route.path);
  }
  // beforeMount: function() {
  //   // console.log("Before Mount");
  // },
  // mounted: function() {
  //   // console.log("Mounted");
  // },
  // beforeUpdate: function() {
  //   // console.log("Before Update");
  // },
  // updated: function() {
  //   // console.log("Updated");
  // },
  // beforeDestroy: function() {
  //   // console.log("Before Destroy");
  // }
};
</script>

<style lang="scss" scoped>
 @import "./public.scss";
.MyTest {
  div {
    border: 1px solid red;
  }
}
</style>
