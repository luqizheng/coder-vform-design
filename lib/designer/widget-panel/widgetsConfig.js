
export const containers = [

]

export const basicFields = [

]

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


]

export const customFields = [

]

export function addContainerWidgetSchema(containerSchema) {
  containers.push(containerSchema)
}

export function addBasicFieldSchema(fieldSchema) {
  basicFields.push(fieldSchema)
}

export function addAdvancedFieldSchema(fieldSchema) {
  advancedFields.push(fieldSchema)
}

export function addCustomWidgetSchema(widgetSchema) {
  customFields.push(widgetSchema)
}
