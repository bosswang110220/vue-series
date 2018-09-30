<template>
  <div id="app"> 
    <div class="container">
     <app-header></app-header>
        <div class='example-5 auto-width'>   
        <div class='left'>
            <router-view/>
          </div>  
         <div class='right'>right</div>
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
  height: 606px;
  width: 80%;
  padding: 1% 10%;
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
</style>
