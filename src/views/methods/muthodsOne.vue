<template>
  <div class="public-body">
    <span @click="handClick">1111111{{ Mname }}</span>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "methodsOne",
  computed: {
    ...mapState({
      Mname: state => state.methodse.Mname,
      Mtitle: state => state.methodse.Mtitle
    }),
    // ...mapGetters(["Mname", "Mtitle"])
  },
  methods: {
    handClick() {
      // console.log(this.$store);
      // this.$store.dispatch("methodse/setNamesAction", "如花");
      this.$store.dispatch("setNamesAction", "如花1");//namespaced设置为false
    }
  }
};
</script>
<style lang="scss" scoped>
 @import "../public.scss";
</style>