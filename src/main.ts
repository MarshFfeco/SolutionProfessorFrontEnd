import { createApp } from 'vue';
import './style.scss';
import { createPinia } from 'pinia';
import router from './router/router'
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router)
app.mount('#app');
