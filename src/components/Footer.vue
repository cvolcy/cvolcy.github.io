<template>
  <footer id="footer">
    <div class="nav">
      <div class="level">
        <div class="level-item has-text-centered"><a href="#">HOME</a></div>
        <div class="level-item has-text-centered"><a href="#">ABOUT</a></div>
        <div class="level-item has-text-centered"><a href="#">BOOKS</a></div>
        <div class="level-item has-text-centered"><a href="#">AWARDS</a></div>
        <div class="level-item has-text-centered"><a href="#">CONTACT</a></div>
      </div>
    </div>
    <div class="copyright">
      <span>© 2017-{{new Date().getFullYear()}}. All Rights Reserved.</span>
    </div>
</footer>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {
}
</script>
<style lang="scss" scoped>
#footer {
  display: flex;
  border-top: 1px solid $border-color;
  padding: 30px 30px 0;
  margin-top: 30px;
  justify-content: space-around;
  flex-wrap: wrap;

  .nav {
    align-items: center;
    display: flex;
    flex: 1 1 207px;
    justify-content: center;
    margin-bottom: 15px;

    .level {
      margin: 0;

      .level-item {
        margin: 0 15px 15px;
      }
    }
  }

  .copyright {
    display: flex;
    flex-basis: 300px;
    justify-content: center;
  }
}
</style>
