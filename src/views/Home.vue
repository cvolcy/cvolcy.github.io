<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Hello, I'm Clervens Volcy, a programmer from Montréal</h2>
    <p>
      I'm Software Engineer bachelor with a keen interest in solving problems, Web technologies,
      machine learning and artificial intelligence.
    </p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
