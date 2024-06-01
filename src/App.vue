<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import Section from './components/Section.vue'
import MainNavbar from './components/MainNavbar.vue'
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'

useColorMode()
</script>

<template>
  <MainNavbar />
  <div class="container flex flex-col min-h-screen ">
    <HelloWorld />
    <Section id="aboutme">
      <template #title>
        ABOUT<br>ME
      </template>
      <AboutMe />
    </Section>
    <Section id="projects">
      <template #title>
        My<br>Project
      </template>
      <Projects />
    </Section>
    <Section id="skills">
      <template #title>
        MY<br>Skills
      </template>
      <Skills />
    </Section>
    <Section id="testimonials">
      <template #title>
        MY<br>Testimonials
      </template>
      <Testimonials />
    </Section>
  </div>
  <Footer />
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