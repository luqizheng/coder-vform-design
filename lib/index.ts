import { App } from 'vue'
import render,{ GetBasicSchema } from 'coder-vform-render'

import 'coder-vform-render/dist/style.css'
import vFormDesigner from './designer/index.vue'
import { addBasicFieldSchema } from './widgetsConfig'
import Draggable from 'vuedraggable-es'
import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'

const install = (app: App) => {

    addDirective(app)
    registerIcon(app)
    app.component('v-form-designer', vFormDesigner);
    app.use(render)

    const a = GetBasicSchema();
    a.forEach((value:object) => {
        console.log('aaa',value)
        addBasicFieldSchema(value);
    })


    app.component('draggable', Draggable)


}
vFormDesigner.install = install;
export default vFormDesigner