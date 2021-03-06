import Vue from 'vue';
import App from './App.vue';
import store from './store';

import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Toasted from 'vue-toasted';
Vue.use(Toasted);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
