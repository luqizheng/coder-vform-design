import { App } from 'vue'
import containerWidget from './widget/container-widget'


import 'coder-vform-render/dist/style.css'
import vFormDesigner from './designer/index.vue'

import Draggable from 'vuedraggable-es'
import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'



const install = (app: any) => {
    app.use(containerWidget);
    addDirective(app)
    registerIcon(app)
    app.component('v-form-designer', vFormDesigner);
    app.component('draggable', Draggable)

}
export default {
    install: install
}