import Vue from 'vue'
import App from './App.vue'
import {store} from './store';


import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';

// Vue.use({
//   // this is the required "install" method for Vue plugins
//   install (Vue) {
//     Vue.swal = VueSweetalert2
//     Vue.prototype.$swal = VueSweetalert2
//   }
// })

Vue.use(VueSweetalert2);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
