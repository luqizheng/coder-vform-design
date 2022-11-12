export const htmlTextSchema = {
    type: 'html-text',
    icon: 'html-text',
    formItemFlag: false,
    options: {
        name: '',
        columnWidth: '200px',
        hidden: false,
        htmlContent: '<b>html text</b>',
        //-------------------
        customClass: '',  //自定义css类名
        //-------------------
        onCreated: '',
        onMounted: '',
    },
}

export const staticTextSchema = {

    type: 'static-text',
    icon: 'static-text',
    formItemFlag: false,
    options: {
        name: '',
        columnWidth: '200px',
        hidden: false,
        textContent: 'static text',
        //-------------------
        customClass: '',  //自定义css类名
        //-------------------
        onCreated: '',
        onMounted: '',
    },
}
