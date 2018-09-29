<template>
    <div class="login">
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
     <h3 class="title">小一登录</h3>
    <el-form-item prop="username">
    <el-input type="text" v-model="account.username" auto-complete="off" placeholder="登录账号"></el-input>
     </el-form-item>
    <el-form-item prop="pwd">
     <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="登录密码"></el-input>
    </el-form-item>   
     <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> 
    <el-form-item style="width:100%;">
    <el-button type="success" style="width:100%;">登录</el-button>
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

<style>
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
  border-radius: 8px;
  width: 350px;
  margin: 160px auto;
  margin-left: 36%;
  background-color: #1e4c9f59;
  height: 300px;
}

.title {
  padding: 20px;
  text-align: center;
  color: #505458;
}

.remember {
  float: right;
  margin-right: 1rem;
  margin-bottom: 13px;
}
.el-input__inner {
  background-color: rgba(0, 0, 0, 0);
}
.el-form-item__content {
  padding: 0rem 1rem;
}
.el-form-item__error {
   padding-top: 0rem;
   padding: 0.4rem 1rem;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
     color: #f1f5f1db; 
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #85ce61;
    border-color: #85ce61;
}
</style>