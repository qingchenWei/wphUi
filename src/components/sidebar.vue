<template>
  <div class="sidebar">
    <ul v-for="item in menuList" :key="item.key">
      <h3 class="menuname">{{ item.menuName }}</h3>
      <li
        class="menuname-sm"
        :class="{'isActive': current == el.key}"
        @click="urlChange(el)"
        v-for="el in item.children"
        :key="el.key"
      >
        {{ el.menuName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup() {
      const route = useRouter();
      const current = ref(11);
    const menuList = reactive([
      {
        menuName: "开发指南",
        key: 1,
        children: [
          {
            menuName: "安装",
            key: 11,
            url: "install"
          },
          {
            menuName: "快速上手",
            key: 12,
            url: "development"
          },
        ],
      },
      {
        menuName: "组件",
        key: 2,
        children: [
          {
            menuName: "button 按钮",
            key: 21,
            url: "button"
          },
          {
            menuName: "dialog 对话框",
            key: 22,
            url: "dialog"
          },
          {
            menuName: "message消息框",
            key: 23,
            url: "message"
          },
        ],
      },
    ]);
    const urlChange = (el) => {
        route.push(el.url)
        current.value = el.key;
    }
    return {
      menuList,
      urlChange,
      current
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  box-shadow: 2px 0 0 0 #eee;
  padding: 40px 40px 0 40px;
  text-align: center;
  .menuname {
    font-weight: 600;
    line-height: 40px;
    font-size: 20px;
  }
  .menuname-sm {
    line-height: 40px;
    font-size: 16px;
    cursor: pointer;
  }
  .menuname-sm:hover {
    border-bottom: 2px solid #eee;
    color: rgb(15, 134, 231);
  }
  .isActive {
    border-bottom: 2px solid #eee;
    color: rgb(15, 134, 231);
  }
}
</style>