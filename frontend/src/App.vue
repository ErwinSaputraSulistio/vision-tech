<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary;

    &.router-link-exact-active {
      color: $secondary;
    }
  }
}
</style>
