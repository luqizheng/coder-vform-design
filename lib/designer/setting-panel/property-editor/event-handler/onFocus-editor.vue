<template>
  <el-form-item label="onFocus" label-width="150px">
    <el-button type="info"  :icon="Edit" plain round @click="editEventHandler('onFocus', eventParams)">
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
    name: "onFocus-editor",
    components:{Edit},
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['event'],
      }
    }
  }
</script>

<style scoped>

</style>
