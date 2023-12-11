import { createApp } from 'vue';
import './style.scss';
import { createPinia } from 'pinia';
import router from './router/router'
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdEmailOutlined, BiEye, BiEyeSlash, MdSecuritySharp, MdDrivefilerenameoutlineOutlined } from "oh-vue-icons/icons";

addIcons(MdEmailOutlined, BiEye, BiEyeSlash, MdSecuritySharp, MdDrivefilerenameoutlineOutlined);

app.use(pinia)
    .use(router)
    .component("v-icon", OhVueIcon)
    .mount('#app');
