
<template>
    <el-header>
     <div class="l-content">
            <!--图标展示-->

   
     </div>
     <div class="r-content">
        <el-dropdown>
    <span class="el-dropdown-link">
        <img class="user"  src="../assets/images/user.png" alt=" ">
      
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>设置</el-dropdown-item>
      
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

        </div>
    </el-header>
</template>
<script>

</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.r-content{
    .user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>