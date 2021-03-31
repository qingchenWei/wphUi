<template>
  <div class="install">
    <h3 class="title">安装</h3>
    <p>npm安装</p>
    <pre>
    <code class="language-js" >
        npm install wph-ui-plus --save
    </code>
    </pre>
    <span>从零开始，量身打造一套属于自己ui组件库，可以自己yy一些炫酷的东西，意在掌握如何封装组件库，由于时间问题，只粗略完成button、dialog，主要探究封装组件的思想，掌握思想，随便自己yy！</span>
  </div>
</template>
  <script>
import { reactive,onMounted } from "vue";
import Prism from "prismjs";
export default {
  name: "install",
  components: {},
  setup() {
    const state = reactive({ code: "value" });
    onMounted(() => {
      Prism.highlightAll();
    })
    return {
      state,
    };
  },
};
</script>
  
  <style lang="scss" scoped>
.install {
  .title {
    width: 60px;
  }
  h3 {
      font-weight: 700;
  }
  p {
    line-height: 100px;
    font-size: 16px;
  }
}
</style>