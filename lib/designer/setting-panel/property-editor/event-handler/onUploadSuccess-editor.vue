<template>
  <el-form-item label="onUploadSuccess" label-width="150px">
    <el-button type="info"  :icon="Edit" plain round @click="editEventHandler('onUploadSuccess', eventParams)">
      {{i18nt('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import {
  Edit
} from '@element-plus/icons-vue'
  import eventMixin from './eventMixin'

  export default {
    name: "onUploadSuccess-editor",
    mixins: [i18n, eventMixin],
    components:{Edit},
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['result', 'file', 'fileList'],
      }
    }
  }
</script>

<style scoped>

</style>
