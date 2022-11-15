import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";

import vformElementPlus, { schema as elementPlusSchema } from 'coder-vform-element-plus'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import DevelopCompents, { SchemaInstaller } from '../lib'

const app = createApp(App);


elementPlusSchema.forEach((value: object) => {
    SchemaInstaller.addBasicFieldSchema(value);
})


app.use(DevelopCompents)

    .use(Antd)
    .use(ElementPlus)
    .use(router)
    .use(vformElementPlus);
app.mount("#app");



