<template>
  <div class="install">
    <h3>Button基础用法</h3>
    <h4>基础用法: 使用type、plain、round和circle属性来定义 Button 的样式。</h4>
    <div class="button-box">
      <h5>朴素按钮：</h5>
      <div class="box">
        <wph-button plain>按钮</wph-button>
        <wph-button plain type="primary">primary按钮</wph-button>
        <wph-button plain type="success">success按钮</wph-button>
        <wph-button plain type="info">info按钮</wph-button>
        <wph-button plain type="danger">danger按钮</wph-button>
        <wph-button plain type="warning">warning按钮</wph-button>
        <wph-button
          plain
          @click="featureState.isShowplain = !featureState.isShowplain"
          >{{ featureState.isShowplain ? "收起代码" : "查看代码" }}</wph-button
        >
        <div v-show="featureState.isShowplain">
          <pre>
        <code id="code" class="language-js" :v-text="featureState.buttonHtml">
          {{featureState.plainButton}}
        </code>
        <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
      </pre>
        </div>
        <h5>默认按钮：</h5>
        <div class="box">
          <wph-button>按钮</wph-button>
          <wph-button type="primary">primary按钮</wph-button>
          <wph-button type="success">success按钮</wph-button>
          <wph-button type="info">info按钮</wph-button>
          <wph-button type="danger">danger按钮</wph-button>
          <wph-button type="warning">warning按钮</wph-button>
          <wph-button
            plain
            @click="featureState.isShow = !featureState.isShow"
            >{{ featureState.isShow ? "收起代码" : "查看代码" }}</wph-button
          >

          <div v-show="featureState.isShow">
            <pre>
        <code id="code" class="language-js" :v-text="featureState.buttonHtml">
          {{featureState.buttonHtml}}
        </code>
        <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
      </pre>
          </div>
        </div>
        <h5>圆角按钮</h5>
        <div class="box">
          <wph-button round>按钮</wph-button>
          <wph-button round type="primary">primary按钮</wph-button>
          <wph-button round type="success">success按钮</wph-button>
          <wph-button round type="info">info按钮</wph-button>
          <wph-button round type="danger">danger按钮</wph-button>
          <wph-button round type="warning">warning按钮</wph-button>
          <wph-button
            plain
            @click="featureState.isShowround = !featureState.isShowround"
            >{{
              featureState.isShowround ? "收起代码" : "查看代码"
            }}</wph-button
          >
        </div>

        <div v-show="featureState.isShowround">
          <pre>
        <code id="code" class="language-js" :v-text="featureState.roundbuttonHtml">
          {{featureState.roundbuttonHtml}}
        </code>
        <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
      </pre>
        </div>
      </div>
      <h5>椭圆按钮</h5>
      <div class="box">
        <wph-button circle>按钮</wph-button>
        <wph-button circle type="primary">primary按钮</wph-button>
        <wph-button circle type="success">success按钮</wph-button>
        <wph-button circle type="info">info按钮</wph-button>
        <wph-button circle type="danger">danger按钮</wph-button>
        <wph-button circle type="warning">warning按钮</wph-button>
        <wph-button
          plain
          @click="featureState.isShowcircle = !featureState.isShowcircle"
          >{{ featureState.isShowcircle ? "收起代码" : "查看代码" }}</wph-button
        >

        <div v-show="featureState.isShowcircle">
          <pre>
        <code id="code" class="language-js" :v-text="featureState.circlebuttonHtml">
          {{featureState.circlebuttonHtml}}
        </code>
        <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
      </pre>
        </div>
      </div>
    </div>
    <h3>禁用状态</h3>
    <h4>按钮不可用状态。</h4>
    <div class="button-box">
      <div class="box">
        <wph-button disabled>按钮</wph-button>
        <wph-button disabled type="primary">primary按钮</wph-button>
        <wph-button disabled type="success">success按钮</wph-button>
        <wph-button disabled type="info">info按钮</wph-button>
        <wph-button disabled type="danger">danger按钮</wph-button>
        <wph-button disabled type="warning">warning按钮</wph-button>
        <wph-button
          plain
          @click="featureState.isShowdisabled = !featureState.isShowdisabled"
          >{{
            featureState.isShowdisabled ? "收起代码" : "查看代码"
          }}</wph-button
        >

        <div v-show="featureState.isShowdisabled">
          <pre>
        <code id="code" class="language-js" :v-text="featureState.disabledbuttonHtml">
          {{featureState.disabledbuttonHtml}}
        </code>
        <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
      </pre>
        </div>
      </div>
    </div>
    <h3>图标按钮</h3>
    <h4>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</h4>
    <div class="button-box">
      <div class="box">
        <wph-button class="iconfont wph-icon-bags"></wph-button>
        <wph-button
          class="iconfont wph-icon-ashbin"
          type="primary"
        ></wph-button>
        <wph-button
          class="iconfont wph-icon-browse"
          type="success"
        ></wph-button>
        <wph-button class="iconfont wph-icon-jewelry" type="info"></wph-button>
        <wph-button class="iconfont wph-icon-hot" type="danger">有文字</wph-button>
        <wph-button
          class="iconfont wph-icon-collection"
          type="warning"
        >有文字</wph-button>
        <wph-button
          plain
          @click="featureState.isShowdiconfont = !featureState.isShowdiconfont"
          >{{
            featureState.isShowdiconfont ? "收起代码" : "查看代码"
          }}</wph-button
        >

        <div v-show="featureState.isShowdiconfont">
          <pre>
            <code id="code" class="language-js" :v-text="featureState.iconfontbuttonHtml">
              {{featureState.iconfontbuttonHtml}}
            </code>
            <div class="copy-text" data-clipboard-target="#code"  @click="copy()">复制代码</div>
          </pre>
        </div>
      </div>
    </div>
    <wph-dialog
      title="复制成功"
      :visible="featureState.showDialog"
      width="60%"
      @close="featureState.showDialog = false"
    >
    </wph-dialog>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, onMounted } from "vue";
export default {
  setup() {
    const featureState = reactive({
      isShowplain: false,
      plainButton: `
        <wph-button>按钮</wph-button>
        <wph-button plain type="primary">primary按钮</wph-button>
        <wph-button plain type="success">success按钮</wph-button>
        <wph-button plain type="info">info按钮</wph-button>
        <wph-button plain type="danger">danger按钮</wph-button>
        <wph-button plain type="warning">warning按钮</wph-button>`,
      showDialog: false,
      isShow: false,
      buttonHtml: `
        <wph-button>按钮</wph-button>
        <wph-button type="primary">primary按钮</wph-button>
        <wph-button type="success">success按钮</wph-button>
        <wph-button type="info">info按钮</wph-button>
        <wph-button type="danger">danger按钮</wph-button>
        <wph-button type="warning">warning按钮</wph-button>`,
      isShowround: false,
      roundbuttonHtml: `
          <wph-button round>按钮</wph-button>
          <wph-button round type="primary">primary按钮</wph-button>
          <wph-button round type="success">success按钮</wph-button>
          <wph-button round type="info">info按钮</wph-button>
          <wph-button round type="danger">danger按钮</wph-button>
          <wph-button round type="warning">warning按钮</wph-button>`,
      isShowcircle: false,
      circlebuttonHtml: `
        <wph-button circle>按钮</wph-button>
        <wph-button circle type="primary">primary按钮</wph-button>
        <wph-button circle type="success">success按钮</wph-button>
        <wph-button circle type="info">info按钮</wph-button>
        <wph-button circle type="danger">danger按钮</wph-button>
        <wph-button circle type="warning">warning按钮</wph-button>`,
      isShowdisabled: false,
      disabledbuttonHtml: `
        <wph-button disabled>按钮111</wph-button>
        <wph-button disabled type="primary">primary按钮</wph-button>
        <wph-button disabled type="success">success按钮</wph-button>
        <wph-button disabled type="info">info按钮</wph-button>
        <wph-button disabled type="danger">danger按钮</wph-button>
        <wph-button disabled type="warning">warning按钮</wph-button>`,
      isShowdiconfont: false,
      iconfontbuttonHtml: `
        <wph-button class="iconfont wph-icon-bags"></wph-button>
        <wph-button class="iconfont wph-icon-ashbin" type="primary"></wph-button>
        <wph-button class="iconfont wph-icon-browse" type="success"></wph-button>
        <wph-button class="iconfont wph-icon-jewelry" type="info"></wph-button>
        <wph-button class="iconfont wph-icon-hot" type="danger">有文字</wph-button>
        <wph-button class="iconfont wph-icon-collection" ype="warning">有文字</wph-button>`,
    });
    let { proxy } = getCurrentInstance();
    onMounted(() => {
      proxy.Prism.highlightAll();
    });
    const copy = () => {
      const clipboard = new proxy.Clipboard(".copy-text");
      clipboard.on("success", function (e) {
        e.clearSelection(); //选中时不显示选中的背景色
        proxy.Message.success("复制成功")
      });
      clipboard.on("error", function () {
        proxy.Message.danger("复制失败")
      });
    };

    return {
      featureState,
      copy,
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