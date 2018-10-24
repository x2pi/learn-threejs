import Vue from 'vue';
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

import classes from 'vuetify/dist/vuetify.min.css' 
import App from './App.vue';




new Vue({
  el: '#app',
  render: h => h(App)
});