<template>
  <cl-layout-wrap class="demo-index">
    <div slot="header" style="margin: 0 auto; display: flex;flex-direction: row;align-items: center">
      <cl-link @click="goRoute('demo1')">Demo1</cl-link>
      <cl-link @click="goRoute('demo2')">Demo2</cl-link>
    </div>
    <div v-if="!hideLeft" class="left-menu" :class="{'is-fold': foldFlag}" slot="left">
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
    name: "Index",
    data() {
      return {
        foldFlag: false,
        hideLeft: false,
      }
    },
    mounted() {
      this.hideLeft = this.$route.meta.hideLeft || false;
    },
    beforeRouteUpdate(to, from, next) {
      if (to.path === from.path) {
        return;
      }
      this.hideLeft = to.meta.hideLeft || false;
      next();
    },
    methods: {
      toggleFold() {
        this.foldFlag = !this.foldFlag;
      },
      goRoute(path) {
        this.$router.push({
          path: path
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .demo-index {
    .left-menu {
      width: 200px;
      transition: width .5s;

      &.is-fold {
        width: 50px;
      }
    }
  }
</style>
