import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import service from "./service/index";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import HelloWorld from "./components/HelloWorld"

const app = createApp(App)

// 全局配置自己写的api
app.config.globalProperties.$service = service

// 使用完整的element组件
app.use(ElementPlus)

// 注册全局组件
// app.component('HelloWorld', HelloWorld)

app.mount('#app')
// createApp(App).mount('#app')
