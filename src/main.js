import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "./scss/main.scss"

import fonts from './utils/fonts';
Vue.use(fonts);

import Toasted from 'vue-toasted';
Vue.use(Toasted);

Vue.toasted.register('saveProject', 'Project Successfully Saved', {
  type: 'success',
  position: 'bottom-right',
  duration: 1200
})

//----------------------------  validation rules
import validations from "./utils/validations"
validations.ValidationSetup();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
