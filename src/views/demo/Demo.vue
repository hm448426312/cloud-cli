<template>
  <div>
    <el-button
      style="margin-left: auto"
      @click="changeLanguageEvent"
    >切换语言(tooltip显示为dom变量中使用国际化语言)
    </el-button>
    <p class="g-text-desc">当前服务语言为（DOM中花括号中使用国际化语言）：{{$i18n.t('language')}}</p>
    <el-button @click="showServiceLanguage">弹框显示本服务语言</el-button>
    <br>
    <el-button
      @click="normalGetJson"
    >正常请求本地json
    </el-button>
    <br>
    <el-button
      @click="abnormalGetJson"
    >异常请求本地json
    </el-button>
  </div>
</template>

<script>
  import demoApi from "api/demoApi";

  export default {
    name: "Demo",
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      showServiceLanguage() {
        this.$message({
          type: "info",
          message: `JS中使用：${this.$i18n.t("language")}`
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
