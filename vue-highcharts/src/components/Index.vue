<template>
  <div class="index">   
  <app-banner></app-banner>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="小一推荐">
      <app-ctitle></app-ctitle>
      </el-tab-pane>
    <el-tab-pane label="1×24h">
      <el-hot></el-hot>
    </el-tab-pane>
    <el-tab-pane label="7×24h">7×24h</el-tab-pane>
    <el-tab-pane label="30×24h">30×24h</el-tab-pane>
    <el-tab-pane label="经典推荐">经典推荐</el-tab-pane>
  </el-tabs>
 </div>
</template>


<script>
import Banner from "@/components/Banner";
import CTitle from "@/components/C-Title";
import ElHot from "@/components/el-hot";
export default {
  name: "Index",
components:{
  "app-banner":Banner,
  "app-ctitle":CTitle,
  "el-hot":ElHot
},
  data() {
    return {
      tabPosition: 'top'
    };
  },
  methods: {
 
  }
};
</script>

<style>
.el-tabs__nav{
  margin-left: 2%;
}

</style>