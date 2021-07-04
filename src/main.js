import { createApp } from 'vue'
// import App from './App.vue'
import FrontEnd from './front-end.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap-touchspin/src/jquery.bootstrap-touchspin.js'
import 'bootstrap-touchspin/src/jquery.bootstrap-touchspin.css'

require('./App.css')

createApp(FrontEnd).mount('#app')
// createApp(App).mount('#app')
