<template>
  <footer id="footer">
    <div class="nav">
      <ul class="menu">
        <li class="item-165"><a href="#">HOME</a></li>
        <li class="item-166"><a href="#">ABOUT</a></li>
        <li class="item-167"><a href="#">BOOKS</a></li>
        <li class="item-168"><a href="#">AWARDS</a></li>
        <li class="item-169"><a href="#">CONTACT</a></li>
      </ul>
      <div id="sp-footer2" class="col-lg-3 ">
        <div class="sp-column ">
          <span class="sp-copyright">© 2013-2021. All Rights Reserved.</span>
        </div>
      </div>
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
.nav {
  padding: 30px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 30px;
  border-top: 1px solid $border-color;

  ul {
    list-style: none;
    text-align: center;
    position: relative;

    li {
      display: inline-block;
      position: relative;
      padding: 0 45px 0 0;
    }
  }
}
</style>
