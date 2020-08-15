<template>
  <div>
    <div>父级传过来的{{ title }}</div>
    <div>
      <span
        v-for="(item, index) in BackData"
        :key="item.key"
        @click="myFunction(item, index)"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "MyChil",
  props: ["title"],
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
      ]
    };
  },
  methods: {
    myFunction: function(params) {
      // console.log(params);
      this.$emit("childFunc", params);
    }
  }
};
</script>
<style lang="sass" scoped></style>
