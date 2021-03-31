<template>
  <div class="install">
    <h3>dialog基础用法</h3>
    <h4>在保留当前页面状态的情况下，告知用户并承载相关操作。</h4>
    <div class="button-box">
      <h3>基本用法</h3>
      <h4>Dialog 弹出一个对话框，适合需要定制性更大的场景。</h4>
      <wph-button @click="dislogChange">打开dialog</wph-button>
      <wph-button @click="featureState.isShow = !featureState.isShow">
        {{ featureState.isShow ? "收起代码" : "查看代码" }}
      </wph-button>
      <div v-show="featureState.isShow">
        <pre>
            <code id="code" class="language-js" :v-text="featureState.html">
              {{featureState.html}}
            </code>
            <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
        </pre>
      </div>
    </div>
    <wph-dialog
      title="这是一个弹窗"
      :visible="showDialog"
      width="60%"
      @close="showDialog = false"
    >
      <template v-slot:title>
        <h3>这是一个标题</h3>
      </template>
      <div>这是内容部分</div>
      <template v-slot:footer>
        <wph-button @click="showDialog = false" plain type="info"
          >取消</wph-button
        >
        <wph-button plain type="primary">确认</wph-button>
      </template>
    </wph-dialog>
  </div>
</template>
  
  <script>
import { ref, reactive,getCurrentInstance,onMounted } from "vue";

export default {
  setup() {
    let { proxy } = getCurrentInstance();
    const showDialog = ref(false);
    const featureState = reactive({
      isShow: false,
      html: `
      <wph-dialog
      title="这是一个弹窗"
      :visible="showDialog"
      width="60%"
      @close="showDialog = false"
    >
      <template v-slot:title>
        <h3>这是一个标题</h3>
      </template>
      <div>这是内容部分</div>
      <template v-slot:footer>
        <wph-button @click="showDialog = false" plain type="info"
          >取消</wph-button
        >
        <wph-button plain type="primary">确认</wph-button>
      </template>
    </wph-dialog>`,
    });
    const dislogChange = () => {
      showDialog.value = true;
    };
    onMounted(() => {
      proxy.Prism.highlightAll();
    });
    return {
      featureState,
      dislogChange,
      showDialog,
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