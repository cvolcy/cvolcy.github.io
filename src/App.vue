<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
body {
  background-color: $bg-color;
  color: $color-primary;

  a {
    color: $link-color;
    text-decoration: none;

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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: $link-active-color;
    }
  }
}
</style>
