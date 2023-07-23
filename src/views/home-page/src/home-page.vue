<script setup>
import "../style"
import router from "@/router/index.js";

function toTeam() {
  router.push({ name: "team" });
}
</script>

<template>
  <div class="home-page-container flex-column">
<!--    <img src="src/assets/logo.png" alt="">-->
    <div class="title flex-column">
      <p>YOCENLY BLOGS</p>
      <p>我的个人成果展示</p>
    </div>
    <el-button @click="toTeam()" type="primary" size="large" round>开始了解</el-button>
  </div>
</template>
