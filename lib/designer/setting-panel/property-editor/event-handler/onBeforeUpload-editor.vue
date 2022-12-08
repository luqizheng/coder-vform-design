<template>
  <el-form-item label="onBeforeUpload" label-width="150px">
    <el-button
      type="info"
      :icon="Edit"
      plain
      round
      @click="editEventHandler('onBeforeUpload', eventParams)"
    >
      {{ i18nt("designer.setting.addEventHandler") }}</el-button
    >
  </el-form-item>
</template>

<script>
import {
  Edit
} from '@element-plus/icons-vue'
import { i18n  } from "coder-vform-render";
import eventMixin from './eventMixin'
export default {
  name: "onBeforeUpload-editor",
  mixins: [i18n, eventMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  components:{
    Edit
  },
  data() {
    return {
      eventParams: ["file"],
    };
  },
};
</script>

<style scoped></style>
