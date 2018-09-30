<template>
<div>
 <el-row>
  <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgUrl" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgUrl1" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
      <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgUrl" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>

</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      imgUrl: require("@/assets/img1.png"),
      imgUrl1: require("@/assets/img2.png")
    };
  }
};
</script>


<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

