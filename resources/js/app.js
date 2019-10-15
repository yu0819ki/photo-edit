import Vue from 'Vue';
import Hello from '../vue/apps/Hello';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Hello),
}).$mount('#app');
