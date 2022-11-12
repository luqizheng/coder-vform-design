<template>
  <el-form-item :label="i18nt('designer.setting.displayType')">
    <el-select v-model="optionModel.type">
      <el-option label="default" value=""></el-option>
      <el-option label="primary" value="primary"></el-option>
      <el-option label="success" value="success"></el-option>
      <el-option label="warning" value="warning"></el-option>
      <el-option label="danger" value="danger"></el-option>
      <el-option label="info" value="info"></el-option>
      <el-option label="text" value="text"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";
import propertyMixin from "../../property-editor/propertyMixin.js";

export default {
  name: "button-type-editor",
  mixins: [i18n, propertyMixin],
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
};
</script>

<style lang="scss" scoped></style>
