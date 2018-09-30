<template>
  <div class="header">  
    <div style="width:100%;background-color: #cfe3d3a3; overflow: hidden">
   <span class="index-nav-left">
     <el-menu :default-active="activeIndex" class="el-menu-demo"     background-color="rgba(255,255,255,0)" mode="horizontal" @select="handleSelect">
       <el-menu-item index="1"><router-link to="/"> <img :src="imgUrl"/> WangYN</router-link> </el-menu-item>
     </el-menu> 
  </span>

  <span class="index-nav-right">               
<el-menu :default-active="activeIndex" class="el-menu-demo"     background-color="rgba(255,255,255,0)" mode="horizontal" @select="handleSelect">
  <el-menu-item index="2"><router-link to="/hello">程序人生</router-link></el-menu-item>
  <el-submenu index="3">
    <template slot="title">技术笔记</template>
    <el-menu-item index="3-1">java后端</el-menu-item>
    <el-menu-item index="3-2">前端技术</el-menu-item>   
    <el-submenu index="3-3">
      <template slot="title">技术杂谈</template>
      <el-menu-item index="3-3-1">规范栈</el-menu-item>
      <el-menu-item index="3-3-2">分享栈</el-menu-item>
      <el-menu-item index="3-3-3">感悟栈</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="4">我的动态</el-menu-item>
  <el-menu-item index="5">成长记</el-menu-item>
  <!-- <el-menu-item index="6"><a href="javascript:;"  @click = "LoginPage()" style="text-decoration:none;">登录</a> | <a href="javascript:;" style="text-decoration:none;"  @click = "func2()">注册</a></el-menu-item> -->
<el-menu-item index="6"><router-link to="/login">登录</router-link> | <a href="javascript:;" style="text-decoration:none;"  @click = "func2()">注册</a></el-menu-item>
</el-menu>
  </span>
  </div>
      
 </div>
</template>


<script>
export default {
  name: "Header",

  data() {
    return {
      imgUrl: require("@/assets/navlogo.png")
    };
  },
  methods: {
 
  }
};
</script>

<style>
.index-nav-right {
  float: right;
  padding-top: 3px;
  margin-right: 5%;
}

.index-nav-left {
  float: left;
  padding-top: 3px;
  color: white;
  margin-left: 10%;
}


</style>