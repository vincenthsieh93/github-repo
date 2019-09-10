<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/github_logo.png" />
    <GitHubRepo />
  </div>
</template>

<script>
import GitHubRepo from "./components/GitHubRepo.vue";

export default {
  name: "app",
  components: {
    GitHubRepo
  }
};
</script>

<style lang="scss">
@import url(assets/style/reset.css);

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  height: 100%;
  padding: 50px 0;
}
</style>
