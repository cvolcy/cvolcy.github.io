<template>
  <Header />
  <div class="container">
    <router-view/>
  </div>
  <Footer />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Options({
  components: { Footer, Header },
})
export default class About extends Vue {
}
</script>
<style lang="scss">
body {
  a {
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

  > .container {
    padding-top: 80px;
    min-height: calc(100vh - 103px);

    @include mobile {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}
</style>
