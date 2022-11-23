import { App, defineAsyncComponent } from 'vue'
import containerWidget from './widget/container-widget'

import render from 'coder-vform-render'
import 'coder-vform-render/dist/style.css'


import Draggable from 'vuedraggable-es'
import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'

const install = (app: any) => {
    app.use(containerWidget);
    addDirective(app)
    registerIcon(app)
    app.use(render)
    app.component('v-form-designer', defineAsyncComponent(() => import('./designer/index.vue')));
    app.component('draggable', Draggable)

}
export default {
    install: install
}