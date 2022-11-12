import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";

//自定义组件导入
import customerCompoents from '../src/element-plus/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import DevelopCompents from '../lib'




const app = createApp(App);


Object.entries(customerCompoents).forEach(([key, value], index) => {

    app.component(key, value)
})

app.use(DevelopCompents)
   
    .use(Antd)
    .use(ElementPlus)
    .use(router)


    app.mount("#app");



