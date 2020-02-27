import Vue from 'vue';
import App from '../vue/apps/PhotoEdit';
import { Field, Slider } from 'buefy';

Vue.use(Field);
Vue.use(Slider);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
