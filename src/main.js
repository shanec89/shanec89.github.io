import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import router from '../router.js';

library.add(faBars, faTimes);
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
