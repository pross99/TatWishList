import router from './router'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

const app = createApp(App)
.component('fa', FontAwesomeIcon)
app.component("v-icon", OhVueIcon);
app.use(router)
app.use(Toast)
app.mount('#app')
