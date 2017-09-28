
<template>
  <el-table class="ll-table" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-table>
</template>

<script>
  let tableIdSeed = 1

  export default {
    name: 'ElTableWrapper',
    data() {
      return {
      }
    },
    created() {
      this.tabelId = 'll-table_' + tableIdSeed + '_'
    }
  }
</script>

<style lang="scss" scoped>

</style>


