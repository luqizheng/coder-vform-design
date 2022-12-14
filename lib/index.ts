
import containerWidget from './widget/container-widget'


import Draggable from 'vuedraggable-es'

import { addDirective } from './utils/directive'

import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'
import designer from './designer/index.vue'
const install = (app: any) => {
    app.use(containerWidget);
    addDirective(app)

    app.component('v-form-designer', designer);
    app.component('draggable', Draggable)

}
export default {
    install: install
}