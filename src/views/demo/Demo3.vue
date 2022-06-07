<template>
  <cl-layout-content class="page-demo">
    <cl-content-title
      :show-back="true"
      @back="handleBack"
      slot="title"
    >多卡片内容
    </cl-content-title>
    <div slot="content">
      <cl-card class="card-list">卡片1</cl-card>
      <cl-card class="card-list">卡片2</cl-card>
      <cl-card class="card-list">卡片3</cl-card>
      <cl-card class="card-list">卡片4</cl-card>
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
    name: "Demo3",
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
  .card-list{
    margin-top: 20px;
  }
</style>
