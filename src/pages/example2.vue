<template>
  <div>
    {{ widgets }}
    <v-form-render :form-json="formJson" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import formDemo from "./demo2.json";
import { widgets } from 'coder-vform-render'

/* 注意：formJson是指表单设计器导出的json，此处演示的formJson只是一个空白表单json！！ */

const formJson = reactive(formDemo);
const optionData = reactive({});
const vFormRef = ref(null);
const formData = ref(null);
const submitForm = () => {
  vFormRef.value
    .getFormData()
    .then((formData) => {
      // Form Validation OK
      alert(JSON.stringify(formData));
    })
    .catch((error) => {
      // Form Validation failed
      ElMessage.error(error);
    });
};
</script>
  