<template>
    <div class="hChart">    
        <x-chart :id="id" :option="option"></x-chart>    
         <x-chart :id="id2" :option="option2"></x-chart>    
    </div>
</template>

<script>
import XChart from "@/components/Chart";
// 导入chart组件模拟数据
import options from "@/chart-options/options";
export default {
  name: "HChart",
  data() {
    let option = options.bar;
    let option2 = options.bar2;
    return {
      id: "test",
      option: option,
      id2: "test2",
      option2: option2
    };
  },

  components: {
    XChart
  }
};
</script>

<style scoped>
</style>
