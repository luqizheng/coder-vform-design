import { App } from 'vue'
import vformElementPlus,{schema as elementPlusSchema} from 'coder-vform-element-plus'
import render, { getSchemas } from 'coder-vform-render'

import 'coder-vform-render/dist/style.css'
import vFormDesigner from './designer/index.vue'
import { addBasicFieldSchema } from './widgetsConfig'
import Draggable from 'vuedraggable-es'
import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'

const install = (app: any) => {

    addDirective(app)
    registerIcon(app)
    app.component('v-form-designer', vFormDesigner);
    app.use(render)

  
    getSchemas().forEach((value: object) => {
        addBasicFieldSchema(value);
    })

    elementPlusSchema.forEach((value:object)=>{
        addBasicFieldSchema(value);
    })

    app.component('draggable', Draggable)
        .use(vformElementPlus)


}
vFormDesigner.install = install;
export default vFormDesigner