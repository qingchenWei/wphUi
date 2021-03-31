(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c3656a8"],{"086e":function(e,p,t){},"2bad":function(e,p,t){"use strict";t("086e")},3312:function(e,p,t){"use strict";t.r(p);var a=t("7a23");const b=Object(a["withScopeId"])("data-v-5ebcbbb3");Object(a["pushScopeId"])("data-v-5ebcbbb3");const c={class:"install"},n=Object(a["createStaticVNode"])('<h3 class="title" data-v-5ebcbbb3>快速上手</h3><p data-v-5ebcbbb3>本节将介绍如何在项目中使用 WphUiPlus</p><h3 class="title" data-v-5ebcbbb3>使用 vue-cli</h3><span data-v-5ebcbbb3>本着对vue3.0热情以及憧憬，此组件库基于vue3.0开发，目前只适用于vue3.0项目；若想应用于vue2.x项目，可将“wph-ui-plus”更改为“wph-ui”，“wph-ui”也是本人基于vue2.x开发的一套ui组件库，在此不多做介绍（关于2.x）！</span><pre data-v-5ebcbbb3>      <code class="language-js" data-v-5ebcbbb3>\n        npm i -g @vue/cli\n        mkdir my-project &amp;&amp; cd my-project\n        vue create project\n        npm i &amp;&amp; npm i wph-ui-plus\n      </code>\n    </pre><h3 class="title" data-v-5ebcbbb3>引入WphUiPlus</h3><span data-v-5ebcbbb3> 你可以引入整个WphUiPlus，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 WphUiPlus </span><p data-v-5ebcbbb3>完整引入</p><span data-v-5ebcbbb3>在main.js中添加以下内容：</span><pre data-v-5ebcbbb3>      <code class="language-js" data-v-5ebcbbb3>\n        import { createApp } from &#39;vue&#39;\n        import App from &#39;./App.vue&#39;\n        import router from &#39;./router&#39;\n        import store from &#39;./store&#39;\n\n        import wphUi from &#39;wph-ui-plus&#39;\n        import &#39;wph-ui-plus/lib/wph-ui-plus.css&#39;\n\n        createApp(App).use(store).use(router).use(wphUi).mount(&#39;#app&#39;)\n      </code>\n    </pre>',10);Object(a["popScopeId"])();const s=b((e,p,t,b,s,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[n])));var o=t("c197"),u=t.n(o),i={name:"install",components:{},setup(){const e=Object(a["reactive"])({code:"value"});return Object(a["onMounted"])(()=>{u.a.highlightAll()}),{state:e}}};t("2bad");i.render=s,i.__scopeId="data-v-5ebcbbb3";p["default"]=i}}]);
//# sourceMappingURL=chunk-9c3656a8.8abeb1ec.js.map