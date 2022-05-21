<template>
  <layout-wrap id="app">
    <header-component slot="ly-header"></header-component>
    <router-view></router-view>
    <footer-component slot="ly-footer"></footer-component>
  </layout-wrap>
</template>

<script>
  import HeaderComponent from "common-ui/src/components/common/HeaderComponent";
  import FooterComponent from "common-ui/src/components/common/FooterComponent";

  export default {
    name: "App",
    components: {FooterComponent, HeaderComponent},
    data() {
      return {}
    },
  }
</script>
<style lang="scss" scoped>
  #app {
  }
</style>
