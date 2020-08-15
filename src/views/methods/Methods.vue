<template>
  <div class="public-body">
    <div @click="handclickN()">{{ names }}</div>
    <div @click="handclickT()">{{ titled }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "methods",
  computed: {
    ...mapGetters(["names", "titled"])
  },
  methods: {
    handclickN(value) {
      // console.log(value);
      // console.log(55555);
      this.$store.dispatch("methods/setNameActions", "赵祯");
    },
    handclickT(value) {
      // console.log(value);
      // console.log(55555);
      this.$store.dispatch("methods/setTitleActions", "大宋");
    }
  }
};
</script>
<style lang="scss" scoped>
 @import "../public.scss";
</style>