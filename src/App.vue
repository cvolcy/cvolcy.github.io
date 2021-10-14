<template>
  <Header />
  <router-view/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/header.vue';

@Options({
  components: { Header },
})
export default class About extends Vue {
}
</script>
<style lang="scss">
body {
  background-color: $bg-color;
  color: $color-primary;

  a {
    color: $link-color;
    text-decoration: none;
    transition: color 400ms, background-color 400ms;

    &:hover {
      color: $link-hover-color;
      text-decoration: revert;
    }
  }

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
