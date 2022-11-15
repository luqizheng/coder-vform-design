import { App } from 'vue'
import containerWidget, { schema as containerWidgets } from './widget/container-widget'

import render, { getSchemas } from 'coder-vform-render'

import 'coder-vform-render/dist/style.css'
import vFormDesigner from './designer/index.vue'
import { addBasicFieldSchema, addContainerWidgetSchema, addAdvancedFieldSchema, addCustomWidgetSchema } from './widgetsConfig'
import Draggable from 'vuedraggable-es'
import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'

export const SchemaInstaller = {
    addBasicFieldSchema,
    addContainerWidgetSchema,
    addAdvancedFieldSchema,
    addCustomWidgetSchema
}

const install = (app: any) => {

    addDirective(app)
    registerIcon(app)
    app.component('v-form-designer', vFormDesigner);
    app.use(render).use(containerWidget);

    //schema 处理
    containerWidgets.forEach((value: object) => {
        addContainerWidgetSchema(value);
    })

    getSchemas().forEach((value: object) => {
        addBasicFieldSchema(value);
    })

  
    app.component('draggable', Draggable)



}
vFormDesigner.install = install;
export default vFormDesigner