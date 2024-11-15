import './assets/main.css';
import { createApp } from 'vue';
import i18n from './shared/plugins/i18n';
import pinia from './shared/plugins/pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app
  .use(i18n)
  .use(pinia)
  .use(router)
  .mount('#app');
