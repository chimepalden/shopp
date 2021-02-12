import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import './app.css';

createApp(App).use(router).mount('#app')