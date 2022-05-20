<template>
  <div id="app">
    <amp-button
      style="margin-left: auto"
      @click="changeLanguageEvent"
      :tooltip="$t('language')"
    >切换语言(tooltip显示为dom变量中使用国际化语言)
    </amp-button>
    <p>当前组件语言为：{{utilsLanguage.language}}</p>
    <p>当前服务语言为（DOM中花括号中使用国际化语言）：{{$i18n.t('language')}}</p>
    <amp-button @click="showServiceLanguage">显示本服务语言</amp-button>
    <br>
    <amp-button
      @click="normalGetJson"
    >正常请求本地json
    </amp-button>
    <br>
    <amp-button
      @click="abnormalGetJson"
    >异常请求本地json
    </amp-button>
  </div>
</template>

<script>
  import demoApi from "./api/demoApi";

  export default {
    name: "App",
    data() {
      return {
        utilsLanguage: window.CLOUD3C_LANGUAGE,
      }
    },
    methods: {
      showServiceLanguage() {
        this.$AmpMessage({
          type: "info",
          message: `JS中使用：${this.$i18n.t("language")}`
        })
      },
      abnormalGetJson() {
        demoApi.abnormalJson().then(res => {
          this.$AmpMessage({
            type: "success",
            message: `获取数据成功：${JSON.stringify(res)}`
          })
        })
      },
      normalGetJson() {
        demoApi.normalJson().then(res => {
          this.$AmpMessage({
            type: "success",
            message: `获取数据成功：${JSON.stringify(res)}`
          })
        })
      },
      // 语言存入localStorage中，值与资源名称一致
      changeLanguageEvent() {
        let lang = localStorage.getItem("language");
        if (!lang || lang === 'zh-CN') {
          localStorage.setItem("language", "en");
        } else {
          localStorage.setItem("language", "zh-CN");
        }
        window.location.reload();
      }
    }
  }
</script>
<style lang="scss" scoped>
  #app {
    padding: 0;
    width: 500px;
    margin: 50px auto;
  }
</style>
