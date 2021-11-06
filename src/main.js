import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
