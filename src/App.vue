<script setup>
import { RouterView } from "vue-router";
import TopBar from "@/components/top-bar"
</script>

<template>
  <div class="app">
    <el-container style="padding: 0; height: 100%">
      <el-header>
        <TopBar/>
      </el-header>
      <el-main>
        <RouterView/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.app {
  height: 100vh;
  overflow: auto;
}
.el-header {
  padding: 0 30px;
  border-bottom: solid 2px rgba(0, 0, 0, 0.2);
}
</style>
