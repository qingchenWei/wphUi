import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wphUi from 'wph-ui-plus'
import 'wph-ui-plus/lib/wph-ui-plus.css'
import Clipboard from 'clipboard';
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
const app = createApp(App);
app.config.globalProperties.Clipboard = Clipboard;
app.config.globalProperties.Prism = Prism;
app.config.globalProperties.Message = wphUi.Message;
app.use(store).use(router).use(wphUi).mount('#app')
