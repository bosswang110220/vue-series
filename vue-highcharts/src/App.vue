<template>
  <div id="app"> 
    <div class="container">
     <app-header></app-header>
        <div class='example-5 auto-width'>   
        <div class='left'>
            <router-view/>
          </div>  
         <div class='right'>
           <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>技术栈</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'java ' + o }}
  </div>
</el-card>
         </div>
         </div> 
   <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  background-image: url(~@/assets/bg.jpg);
  background-size: cover;
}

.example-5 {
  height: 1606px;
  width: 80%;
  padding: 0 10%;
}
.example-5:after {
  clear: both;
}
.example-5 .left {
  width: calc(100% - 248px);
  height: 100%;
  border: 1px solid #741212;
  float: left;
}
.example-5 .right {
  border: 1px solid red;
  height: 100%;
  width: 240px;
  float: right;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  padding: 1%;
}
</style>
