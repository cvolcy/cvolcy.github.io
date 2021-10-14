<template>
  <div class="header">
    <div v-if="active" class="nav-padding" />
    <div :class="['nav', { sticky: active }]">
      <div class="logo"></div>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div class="socials"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Header extends Vue {
  active = false;

  mounted(): void {
    window.document.onscroll = () => {
      if (window.scrollY > this.$el.offsetTop) {
        this.active = true;
      } else {
        this.active = false;
      }
    };
  }
}
</script>
<style lang="scss" scoped>
.nav {
  padding: 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 30px;

  &.sticky {
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: solid 1px #2e355a;
    background-color: rgba($bg-color, 0.9);
  }

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

  a {
    font-weight: bold;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: $link-active-color;
    }
  }
}

.nav-padding {
  height: 90px;
}
</style>
