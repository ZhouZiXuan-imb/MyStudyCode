import { createApp } from "vue";
import App from "./App.vue";
import routes from './router/index'

let app = createApp(App)
app.use(routes)

app.mount("#app");
