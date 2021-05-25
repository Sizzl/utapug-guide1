<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};
</script>
<style>
#app {
  background-color: rgb(30, 29, 53);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fefeff;
}
</style>
