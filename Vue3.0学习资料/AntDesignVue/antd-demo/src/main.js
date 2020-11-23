import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const app = createApp();
app.config.productionTip = false;

createApp(App).use(Antd).mount("#app");
