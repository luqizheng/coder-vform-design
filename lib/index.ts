import { App } from 'vue'
import { GetBasicSchema } from 'coder-vform-render'
import render from 'coder-vform-render'
import vFormDesigner from './designer/index.vue'

const install = (app: App) => {
    app.component('v-form-designer', vFormDesigner);
    app.component('v-form-render', render)

}
vFormDesigner.install = install;
export default vFormDesigner