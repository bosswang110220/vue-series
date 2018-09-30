<template>
    <div>
        <el-row  align="middle">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark hotimg">
                    <img :src="imgUrl"/>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple-dark hotcontent">
                    <h2>{{msg}}</h2>
                    <p>{{msg}}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    export default{
        mounted(){
            this.$store.dispatch("getHot");
        },
        data(){
            return {
                  imgUrl: require("@/assets/img1.png"),            
                  msg:"hello vue"
                }
        }
    }
</script>
