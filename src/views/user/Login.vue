<template>
  <div >
    <div class="header">

    </div>
    <div class="hello">
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
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from "../../api/index";
export default {
  name: "Login",
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
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(formName);
          // console.log(this.ruleForm);
          // console.log(this.ruleForm.password);
          // console.log(this.ruleForm.username);
          login(this.ruleForm).then(response => {
            // console.log(response);
            if (response.status == 200) {
              window.sessionStorage.setItem(
                "userInfo",
                JSON.stringify(response.data)
              );
              // console.log(window.sessionStorage.getItem("userInfo"));
              // this.$router.push({ path: "/about", query: { id: "1" } }); //拼接到URL地址后面页面刷新参数不会丢失
              // this.$router.push({ name: "about", query: { id: "1" } }); //参数不拼接到URL后面，页面数信会丢失
              this.$router.push("/"); //参数不拼接到URL后面，页面数信会丢失
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
    }
  }
};
</script>
<style scoped lang="scss">
@import "./style.scss";
</style>