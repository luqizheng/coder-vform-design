import { App } from 'vue'
import { GetBasicSchema } from 'coder-vform-render'
import render from 'coder-vform-render'
import vFormDesigner from './designer/index.vue'
import { addBasicFieldSchema } from './widgetsConfig'
import { objectToString } from '@vue/shared'
import Draggable from 'vuedraggable-es'

import { registerIcon } from './utils/el-icons'
import { addDirective } from './utils/directive'

const install = (app: App) => {

    addDirective(app)
    registerIcon(app)
    app.component('v-form-designer', vFormDesigner);
    app.component('v-form-render', render)

    const a = GetBasicSchema();
    var e = a.get("HtmlTextWidget")
    addBasicFieldSchema(e);
    app.component('draggable', Draggable)


}
vFormDesigner.install = install;
export default vFormDesigner