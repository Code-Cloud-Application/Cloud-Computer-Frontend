
<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside/>
      <el-container class="r-container"> 
        <common-header/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
export default defineComponent({
  components:{
    CommonHeader,
    CommonAside
  },
});
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color:lightsteelblue;
}
.r-container{
  flex-wrap: wrap;
}
.common-layout{
  height: 100%;

}
</style>