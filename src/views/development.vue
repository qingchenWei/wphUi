<template>
  <div class="install">
    <h3 class="title">快速上手</h3>
    <p>本节将介绍如何在项目中使用 WphUiPlus</p>
    <h3 class="title">使用 vue-cli</h3>
    <span
      >本着对vue3.0热情以及憧憬，此组件库基于vue3.0开发，目前只适用于vue3.0项目；若想应用于vue2.x项目，可将“wph-ui-plus”更改为“wph-ui”，“wph-ui”也是本人基于vue2.x开发的一套ui组件库，在此不多做介绍（关于2.x）！</span
    >
    <pre>
      <code class="language-js" >
        npm i -g @vue/cli
        mkdir my-project && cd my-project
        vue create project
        npm i && npm i wph-ui-plus
      </code>
    </pre>
    <h3 class="title">引入WphUiPlus</h3>
    <span>
      你可以引入整个WphUiPlus，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 WphUiPlus
    </span>
    <p>完整引入</p>
    <span>在main.js中添加以下内容：</span>
    <pre>
      <code class="language-js" >
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from './router'
        import store from './store'

        import wphUi from 'wph-ui-plus'
        import 'wph-ui-plus/lib/wph-ui-plus.css'

        createApp(App).use(store).use(router).use(wphUi).mount('#app')
      </code>
    </pre>
  </div>
</template>
<script>
import { reactive , onMounted} from "vue";
import Prism from "prismjs";
export default {
  name: "install",
  components: {},
  setup() {
    const state = reactive({ code: "value" });
    onMounted(() => {
      Prism.highlightAll();
    });
    return {
      state,
    };
  },
};
</script>
    
<style lang="scss" scoped>
.install {
  .title {
    width: 220px;
  }
  p {
    line-height: 40px;
    font-size: 16px;
  }
  h3 {
      font-weight: 700;
  }
  span {
      display: inline-block;
      padding: 20px 0;
  }
}
</style>