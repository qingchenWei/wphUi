<template>
  <div class="install">
    <h3>message基础用法</h3>
    <h4>用来显示「成功、警告、消息、错误」类的操作反馈。</h4>
    <div class="button-box">
      <wph-button @click="dislogChange('success')">成功</wph-button>
      <wph-button @click="dislogChange('warning')">警告</wph-button>
      <wph-button @click="dislogChange('info')">消息</wph-button>
      <wph-button @click="dislogChange('danger')">错误</wph-button>
    </div>
    <h3>使用方法</h3>
    <div class="button-box">
      <pre>
            <code id="code" class="language-js">
                将message挂载在全局，3.0新写法
                import wphUi from 'wph-ui-plus'
                import 'wph-ui-plus/lib/wph-ui-plus.css'
                const app = createApp(App);
                app.config.globalProperties.Message = wphUi.Message;

                在页面中使用：
                import { getCurrentInstance } from "vue";
                在setup(){}调用：
                let { proxy } = getCurrentInstance();
                proxy.Message["success"]("恭喜你，这是一条成功消息");
            </code>
          </pre>
    </div>
  </div>
</template>
    
<script>
import { ref, onMounted, getCurrentInstance } from "vue";

export default {
  setup() {
    let { proxy } = getCurrentInstance();
    const message = ref("");
    onMounted(() => {
      proxy.Prism.highlightAll();
    });
    const dislogChange = (type) => {
      switch (type) {
        case "success":
          message.value = "恭喜你，这是一条成功消息";
          break;
        case "info":
          message.value = "这是一条消息提示";
          break;
        case "danger":
          message.value = "错了哦，这是一条错误消息";
          break;
        case "warning":
          message.value = "警告哦，这是一条警告消息";
          break;
      }
      proxy.Message[type](message);
    };
    onMounted(() => {
      proxy.Prism.highlightAll();
    });
    return {
      dislogChange,
    };
  },
};
</script>
    
<style lang="scss" scoped>
.install {
  padding: 20px;
}
.button-box {
  width: 900px;
  box-shadow: 0px 0px 2px #333;
  padding: 10px 14px;
  .copy-text {
    margin-left: 40px;
  }
}
h4 {
  margin: 20px 0;
}
h3 {
  margin: 20px 0;
  font-weight: 600;
}
h5 {
  margin: 20px 0;
}
.wph-button {
  margin: 0 5px;
}
</style>