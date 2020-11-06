import {createApp} from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


const app = createApp(App)
app.use(ElementUI)
app.mount("#app");
