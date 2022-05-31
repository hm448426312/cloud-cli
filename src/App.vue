<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>
<style lang="scss" scoped>
  #app{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
