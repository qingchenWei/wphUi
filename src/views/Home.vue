<template>
  <div class="home">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Sidebar from "../components/sidebar";
export default {
  name: "Home",
  components: { Header, Sidebar },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  min-width: 900px;
  .content {
    position: absolute;
    padding: 40px;
    left: 200px;
    right: 0;
    bottom: 0;
    top: 50px;
  }
}
</style>