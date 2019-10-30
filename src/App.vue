<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "components/tabbar/TabBar";
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>

<style lang="less"></style>
