<template>
  <el-form-item label="onSubFormRowInsert" label-width="150px">
    <el-button type="info"  :icon="Edit" plain round @click="editEventHandler('onSubFormRowInsert', eventParams)">
      {{i18nt('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import eventMixin from './eventMixin'

  export default {
    name: "onSubFormRowInsert-editor",
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['subFormData', 'newRowId'],
      }
    }
  }
</script>

<style scoped>

</style>
