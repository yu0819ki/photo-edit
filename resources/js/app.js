import Vue from 'vue';
import App from '../vue/apps/PhotoEdit';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
