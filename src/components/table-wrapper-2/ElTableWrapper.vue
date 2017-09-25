
<template>
  <el-table class="ll-table" v-bind="$attrs" v-on="$listeners">
    <!-- <slot>
      <div slot="append">
        <slot name="append"></slot>
      </div>
    </slot> -->
    <slot></slot>
  </el-table>
</template>

<script>
  export default {
    name: 'ElTableWrapper',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>


