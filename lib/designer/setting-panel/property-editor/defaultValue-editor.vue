<template>
  <el-form-item
    v-if="!hasConfig('optionItems')"
    :label="i18nt('designer.setting.defaultValue')"
  >
    <el-input
      type="text"
      v-model="optionModel.defaultValue"
      @change="emitDefaultValueChange"
    ></el-input>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";

import propertyMixin from "./propertyMixin";

export default {
  name: "defaultValue-editor",
  mixins: [i18n, propertyMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
};
</script>

<style scoped></style>
