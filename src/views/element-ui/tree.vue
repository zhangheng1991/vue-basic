<template>
  <div class="public-body">
    <h1>element-ui 树节点</h1>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      show-checkbox
      @check-change="handleCheckChange"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "treed",
  computed: {},
  data() {
    return {
      data: [
        {
          label: "一级 1",
          id:"1",
          children: [
            {
              label: "二级 1-1",
               id:"1-1",
              children: [
                {
                  label: "三级 1-1-1",
                   id:"1-1-1",
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
           id:"2",
          children: [
            {
              label: "二级 2-1",
               id:"2-1",
              children: [
                {
                  label: "三级 2-1-1",
                  id:"2-1-1",
                }
              ]
            },
            {
              label: "二级 2-2",
              id:"2-2",
              children: [
                {
                  label: "三级 2-2-1",
                  id:"2-2-1",
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          id:"3",
          children: [
            {
              label: "二级 3-1",
              id:"3-1",
              children: [
                {
                  label: "三级 3-1-1",
                  id:"3-1-1",
                }
              ]
            },
            {
              label: "二级 3-2",
              id:"3-2",
              children: [
                {
                  label: "三级 3-2-1",
                  id:"3-2-1",
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  mounted() {},
  watch: {
    $route(to, from) {
      console.log(to.path);
      console.log(to);
      console.log(from);
      // console.log(this.$route);
    }
  },
  methods: {
    // handleNodeClick(data) {
    //   console.log(data);
    // },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    // loadNode(node, resolve) {
    //   if (node.level === 0) {
    //     return resolve([{ name: "region1" }, { name: "region2" }]);
    //   }
    //   if (node.level > 3) return resolve([]);

    //   var hasChild;
    //   if (node.data.name === "region1") {
    //     hasChild = true;
    //   } else if (node.data.name === "region2") {
    //     hasChild = false;
    //   } else {
    //     hasChild = Math.random() > 0.5;
    //   }

    //   setTimeout(() => {
    //     var data;
    //     if (hasChild) {
    //       data = [
    //         {
    //           name: "zone" + this.count++
    //         },
    //         {
    //           name: "zone" + this.count++
    //         }
    //       ];
    //     } else {
    //       data = [];
    //     }

    //     resolve(data);
    //   }, 500);
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>