<template>
    <div class="login">
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
     <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
    <el-input type="text" v-model="account.username" auto-complete="off" placeholder="登录账号"></el-input>
     </el-form-item>
    <el-form-item prop="pwd">
     <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="登录密码"></el-input>
    </el-form-item>   
     <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> 
    <el-form-item style="width:100%;">
    <el-button type="primary" style="width:100%;">登录</el-button>
    </el-form-item>
    </el-form>
</div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      logining: false,
      account: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          } //{ validator: validaePass }
        ],
        pwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  }
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #e8e7ec;
  background-image: url(~@/assets/login_bg.png);
  background-size: cover;
}

.login-container {
  width: 350px;
  margin: 160px auto;
  margin-left: 35%;
  background-color: #1e4c9f59;
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.remember {
  float: right;
  margin-bottom: 13px;
}
.el-input__inner {
     background-color: rgba(255,255,255,0);
}

</style>