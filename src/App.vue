<template>
  <cl-layout-wrap id="app">
    <div slot="header">顶部导航</div>
    <div class="left-menu" :class="{'is-fold': foldFlag}" slot="left">
      <div style="display: flex; flex-direction: row">
        <cl-button
          style="margin-left: auto"
          @click="toggleFold"
          type="text"
          :icon="foldFlag ? 'cl-icon-s-unfold' : 'cl-icon-s-fold'"
        ></cl-button>
      </div>
      <p>左侧菜单</p>
    </div>
    <router-view></router-view>
  </cl-layout-wrap>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        foldFlag: false,
      }
    },
    methods: {
      toggleFold() {
        this.foldFlag = !this.foldFlag;
      },
    }
  }
</script>
<style lang="scss" scoped>
  #app {
    .left-menu {
      width: 200px;
      transition: width .5s;

      &.is-fold {
        width: 50px;
      }
    }
  }
</style>
