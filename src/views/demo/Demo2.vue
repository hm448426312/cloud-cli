<template>
  <cl-layout-content class="page-demo" :is-center="true">
    <cl-content-title
      :show-back="true"
      @back="handleBack"
      slot="title"
    >标题
      <template slot="right">
        <cl-button type="primary">主要按钮</cl-button>
      </template>
    </cl-content-title>
    <div slot="title-after">
      标题之下的内容
    </div>
    <div>
      <h1>国际化、请求示例</h1>
      <cl-button
        style="margin-left: auto"
        @click="changeLanguageEvent"
      >切换语言(tooltip显示为dom变量中使用国际化语言)
      </cl-button>
      <p class="cl-text-desc">当前服务语言为（DOM中花括号中使用国际化语言）：{{$t('language')}}</p>
      <cl-button @click="showServiceLanguage">弹框显示本服务语言</cl-button>
      <br>
      <cl-button
        @click="normalGetJson"
      >正常请求本地json
      </cl-button>
      <br>
      <cl-button
        @click="abnormalGetJson"
      >异常请求本地json
      </cl-button>
      <div>
        <cl-tooltip content="tooltip">
          <cl-button>cl-tooltip</cl-button>
        </cl-tooltip>
      </div>
    </div>
    <cl-form v-model="testForm">
      <cl-form-item required label="名称" prop="name">
        <cl-input v-model="testForm.name"></cl-input>
      </cl-form-item>
    </cl-form>
    <div slot="footer">
      <cl-button>按钮</cl-button>
    </div>
  </cl-layout-content>
</template>

<script>
  import demoApi from "api/demoApi";

  export default {
    name: "Demo2",
    data() {
      return {
        testForm: {
          name: ""
        },
      }
    },
    methods: {
      handleBack() {
        this.$message({
          type: "success",
          message: "点击返回按钮"
        })
      },
      showServiceLanguage() {
        this.$message({
          type: "info",
          message: `JS中使用：${this.$t("language")}`
        })
      },
      abnormalGetJson() {
        demoApi.abnormalJson().then(res => {
          this.$message({
            type: "success",
            message: `获取数据成功：${JSON.stringify(res)}`
          })
        })
      },
      normalGetJson() {
        demoApi.normalJson().then(res => {
          this.$message({
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
</style>
