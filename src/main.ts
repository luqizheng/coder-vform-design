import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";

import render from 'coder-vform-render'
import vformElementPlus from 'coder-vform-element-plus'
//import oaFrom from "oa-vform-components"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import DevelopCompents from '../lib'
const host = 'http://183.237.148.22:58080'


//import OAContract from 'oa-contract-compoents'


//import cars from 'oa-car-components'
//import OAPreview from 'oa-preview-components'
//import organizations from 'oa-organization-components'

const app = createApp(App);
/*
app.use(cars, {
    path: host + '/api/car',
    request: axios
})

app.use(organizations, {
    path: host + '/api/org',
    request: axios
})

app.use(OAPreview, {
    path: host + "/api/printPDF",
    request: axios,
})

app.use(OAContract, { path: host + '/api/contract', request: axios })
*/
app.use(DevelopCompents)
    .use(render)
    .use(vformElementPlus)

    .use(Antd)
    .use(ElementPlus)
    .use(router)

app.mount("#app");



