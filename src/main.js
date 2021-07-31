import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入自定义组件
import components from './components';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(components);

app.mount('#app');
// createApp(App).use(store).use(router).mount('#app')
