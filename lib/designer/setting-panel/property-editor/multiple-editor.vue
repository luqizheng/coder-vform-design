<template>
  <el-form-item :label="i18nt('designer.setting.multiple')">
    <el-switch v-model="optionModel.multiple" @change="onMultipleSelected"></el-switch>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import propertyMixin from "./propertyMixin";

  export default {
    name: "multiple-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
