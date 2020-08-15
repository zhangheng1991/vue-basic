
<template>
  <div class="public-body">
    <span @click="handclick">{{ username }}</span>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "muthodsTwo",
  computed: {
    ...mapState({
      username: state => state.muthodsTwo.username
    })
  },
  methods: {
    ...mapMutations("muthodsTwo", ["setUsername"]),//...mapMutations第一个参数为namespaced的名字；第二个为muthods里定义的方法
    handclick() {
        this.setUsername("張衡");
        // console.log(this);
    }
  },
  beforeMount() {
    // console.log(this.$route);
    // console.log(window.location.href)
    // console.log(222)
  },
  created(){
    // console.log(111)
  },
  beforeUpdate(){
    // console.log(333)
  },
  mounted(){
    // console.log(444)
  },
  beforeCreate(){
    // console.log(555)
  },
  beforeDestroy(){
    // console.log(666)
  },
  updated(){
    // console.log(7777)
  },
  destroyed(){
    // console.log(888)
  }
};
</script>
<style lang="scss" scoped>
 @import "../public.scss";
</style>