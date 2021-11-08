import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import emitter from './tools/mitt';

const app = createApp(App);
app.use(VueAxios, axios);
app.config.globalProperties.emitter = emitter;
app.use(router);
app.mount('#app');
