import { IScheam, widgetManager } from "coder-vform-render";


const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })
export default {
  install(app: any) {
    for (const path in modules) {

      let comp = modules[path] as any;
      console.log('-------------------------------', comp.name)
      widgetManager.addComponents(comp);
    }
  }
}



const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })
for (const path in schemaFiles) {
  if (path == "./containerMixin.js")
    continue;
  let widgetSchema = schemaFiles[path] as IScheam;
  widgetManager.addBasicFieldSchema(widgetSchema)

}