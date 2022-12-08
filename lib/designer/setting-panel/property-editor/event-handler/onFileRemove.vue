<template>
  <el-form-item label="onFileRemove" label-width="150px">
    <el-button
      type="info"
       :icon="Edit"
      plain
      round
      @click="editEventHandler('onFileRemove', eventParams)"
    >
      {{ i18nt("designer.setting.addEventHandler") }}</el-button
    >
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import eventMixin from "./eventMixin";
import {
  Edit
} from '@element-plus/icons-vue'
export default {
  name: "onFileRemove-editor",
  mixins: [i18n, eventMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  components:{Edit},
  data() {
    return {
      eventParams: ["file", "fileList"],
    };
  },
};
</script>

<style scoped></style>
