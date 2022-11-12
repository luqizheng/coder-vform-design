import { App } from 'vue'
import render,{GetBasicSchema} from 'coder-vform-render'

const install = (app: App) => {

    app.use(render)

}
export default {
    install
}