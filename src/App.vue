<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import MainNavbar from './components/MainNavbar.vue'
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'

useColorMode()
</script>

<template>
  <MainNavbar />
  <div class="container flex flex-col min-h-screen ">
    <HelloWorld />
    <AboutMe />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<style>
html, body {
  scroll-behavior: smooth;
}
</style>