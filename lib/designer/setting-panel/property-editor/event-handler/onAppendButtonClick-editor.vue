<template>
  <el-form-item label="onAppendButtonClick" label-width="150px">
    <el-button type="info" :icon="Edit" plain round @click="editEventHandler('onAppendButtonClick', eventParams)">
      {{ i18nt('designer.setting.addEventHandler') }}</el-button>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import {
  Edit
} from '@element-plus/icons-vue'
import eventMixin from './eventMixin'
export default {
  name: "onAppendButtonClick-editor",
  mixins: [i18n, eventMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  components: {
    Edit
  },
  data() {
    return {
      eventParams: [],
    }
  }
}
</script>

<style scoped>

</style>
