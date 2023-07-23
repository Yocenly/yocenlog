<script setup>
import "../style"
import { RouterView } from 'vue-router'
import SideBar from "@/components/side-bar/index.js";
</script>

<template>
  <div class="team-project-container">
    <SideBar></SideBar>
    <RouterView></RouterView>
  </div>
  <h1>团队项目</h1>
</template>
