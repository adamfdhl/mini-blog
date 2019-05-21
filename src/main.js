import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue';
import VueResource from 'vue-resource';

Vue.component('Navbar', Navbar);
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
