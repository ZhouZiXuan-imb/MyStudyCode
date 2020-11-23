import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 引入composition API组件
import VueCompositionAPI from '@vue/composition-api'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入E-chart
import VCharts from 'v-charts'

Vue.use(VCharts)

Vue.use(ElementUI)

Vue.use(VueCompositionAPI)

new Vue({
  render: h => h(App)
}).$mount("#app");