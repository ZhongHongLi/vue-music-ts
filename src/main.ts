import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import axios from "@/api/axios";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import '@/assets/fonts/iconfont.css'
// import "./index.css";
const app = createApp({});
app.config.globalProperties.$api = axios;
createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
