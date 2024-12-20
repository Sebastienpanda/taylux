import '@queo/core/src/styles/main.scss';
import plugin from '@queo/vue';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(plugin);
app.mount('#app');
