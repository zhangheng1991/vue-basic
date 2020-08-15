<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-bind:class="{ active: isActive }"></div>
    <div class="static" v-bind:class="{ active: isActive }">sfsdfsdfsdfsdf</div>
    <h1 v-show="{ isActive }">Hello!</h1>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        @click="handClick(item, index)"
        :class="[isFlag == index ? class1 : class2]"
      >
        {{ item.title }}
      </li>
    </ul>
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        @click="handClick(item, index)"
        :class="[isFlag == index ? class3 : class4]"
      >
        {{ item.title }}{{ item.key }}
      </li>
    </ul>
    <ul>
      <li
        class="public"
        v-for="(item, index) in data"
        :key="index"
        @click="handClick(item, index)"
        :class="[myClass(item)]"
      >
        {{ item.title }}{{ item.key }}
      </li>
    </ul>
      <div style="display:none">
         <el-form
      :model="ruleForm"
      :rules="rules"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用戶名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" placeholder="請輸入密碼">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
      </div>
  </div>
</template>

<script>
import { login } from "../api/index";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    var checkUser = (rule, value, callback) => {
      // console.log(value);
      if (!value) {
        return callback(new Error("用戶名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };

    return {
      ruleForm: {
        password: "",
        username: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkUser, trigger: "blur" }]
      },
      username: "",
      type: "A",
      isActive: true,
      isFlag: 0,
      class1: "public selected",
      class2: "public",
      class3: "publics selecteds",
      class4: "publics",
      data: [
        {
          title: "标题1",
          key: "1",
          type: 1
        },
        {
          title: "标题2",
          key: "2",
          type: 2
        },
        {
          title: "标题3",
          key: "3",
          type: 3
        },
        {
          title: "标题4",
          key: "4",
          type: 4
        },
        {
          title: "标题5",
          key: "5",
          type: 5
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(formName);
          console.log(this.ruleForm);
          console.log(this.ruleForm.password);
          console.log(this.ruleForm.username);
          login(this.ruleForm).then(response => {
            console.log(response);
            if (response.status == 200) {
              this.$router.push({ path: "/about", query: { id: "1" } }); //拼接到URL地址后面页面刷新参数不会丢失
              // this.$router.push({ name: "about", query: { id: "1" } }); //参数不拼接到URL后面，页面数信会丢失
              this.username = response.data.token;
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
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handClick(obj, index) {
      console.log(obj);
      console.log(index);
      this.isFlag = index;
    },
    myClass(obj) {
      //  console.log(window)
      //  console.log(config)
      if (obj.type == 1) {
        return "first";
      }
      if (obj.type == 2) {
        return "second";
      }
      if (obj.type == 3) {
        return "three";
      }
      if (obj.type == 4) {
        return "four";
      }
      if (obj.type == 5) {
        return "five";
      }
    },
    
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./style.scss";
</style>
