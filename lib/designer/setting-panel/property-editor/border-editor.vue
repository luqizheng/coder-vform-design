<template>
  <el-form-item :label="i18nt('designer.setting.border')">
    <el-switch v-model="optionModel.border"></el-switch>
  </el-form-item>
</template>

<script>
import { i18n } from "coder-vform-render";

  export default {
    name: "border-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
