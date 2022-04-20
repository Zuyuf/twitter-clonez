import { createApp } from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';
import VeeValidatePlugin from './includes/validation';

import './assets/tailwind.css';

//

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VeeValidatePlugin);

app.mount('#app');
