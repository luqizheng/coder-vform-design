<template>
  <el-form-item label="onSubFormRowChange" label-width="150px">
    <el-button type="info"  :icon="Edit" plain round @click="editEventHandler('onSubFormRowChange', eventParams)">
      {{i18nt('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import eventMixin from './eventMixin'
import {
  Edit
} from '@element-plus/icons-vue'
  export default {
    name: "onSubFormRowChange-editor",
    mixins: [i18n, eventMixin],
    components:{Edit},
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['subFormData'],
      }
    }
  }
</script>

<style scoped>

</style>
