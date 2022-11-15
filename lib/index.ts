import { App } from 'vue'
import containerWidget, { schema as containerWidgets } from './widget/container-widget'

import render, { WidgetManager } from 'coder-vform-render'

import 'coder-vform-render/dist/style.css'
import vFormDesigner from './designer/index.vue'

import Draggable from 'vuedraggable-es'
import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'



const install = (app: any) => {

    addDirective(app)
    registerIcon(app)
    app.component('v-form-designer', vFormDesigner);
    app.use(render).use(containerWidget);

    //schema 处理
    containerWidgets.forEach((value: object) => {
        WidgetManager.addContainerWidgetSchema(value);
    })

    app.component('draggable', Draggable)

}
vFormDesigner.install = install;
export default vFormDesigner