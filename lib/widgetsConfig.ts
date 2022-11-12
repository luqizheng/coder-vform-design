
export const containers = [

] as Array<Object>

export const basicFields = [

] as Array<Object>

export const advancedFields = [

  /*
  
    {
      type: 'rich-editor',
      icon: 'rich-editor-field',
      formItemFlag: true,
      options: {
        name: '',
        label: '',
        labelAlign: '',
        placeholder: '',
        labelWidth: null,
        labelHidden: false,
        columnWidth: '200px',
        contentHeight: '200px',
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: '',
        customRule: '',
        customRuleHint: '',
        //-------------------
        customClass: '',  //自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        minLength: null,
        maxLength: null,
        showWordLimit: false,
        //-------------------
        onCreated: '',
        onMounted: '',
        onValidate: '',
      },
    }*/


] as Array<Object>

export const customFields = [

] as Array<Object>

export function addContainerWidgetSchema(containerSchema: object) {
  containers.push(containerSchema)
}

export function addBasicFieldSchema(fieldSchema: object) {
  basicFields.push(fieldSchema)
}

export function addAdvancedFieldSchema(fieldSchema: object) {
  advancedFields.push(fieldSchema)
}

export function addCustomWidgetSchema(widgetSchema: object) {
  customFields.push(widgetSchema)
}
