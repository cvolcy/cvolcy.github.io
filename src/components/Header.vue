<template>
  <div class="header">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" aria-label="menu" aria-expanded="false"
          :class="['navbar-burger', {'is-active': menuIsActive }]"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>
      <div :class="['navbar-menu', {'is-active': menuIsActive }]">
        <div class="navbar-items">
          <div class="navbar-item">
            <router-link to="/">Home</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/projects">Projects</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Header extends Vue {
  menuIsActive = false;

  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }
}
</script>
<style lang="scss" scoped>
@import 'bulma/sass/components/navbar';

nav.navbar {
  background-color: $bg-color;
  border-bottom: solid 1px $border-color;

  .navbar-burger {
    margin-left: 0;
  }

  .navbar-menu {
    justify-content: center;

    .navbar-items {
      display: flex;

      @include until(1005px) {
        flex-direction: column;
      }

      .navbar-item {
        padding: 0 20px 0;

        &:hover, :focus {
          background-color: transparent;
        }

        @include until(1005px) {
          margin: 10px 0;
        }

        a {
          font-weight: bold;
          text-transform: uppercase;

          &.router-link-exact-active {
            color: $link-active-color;
          }
        }
      }
    }
  }
}
</style>
