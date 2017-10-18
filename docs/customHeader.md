# Show Custom Header

Table属性 `show-custom-header` 控制表格头搜索/筛选行的显示与否

## render custom header

```html
/*vue*/
<desc>
</desc>
<template>
  <el-table-wrapper :data="data" :columns="columns" :show-custom-header="true">
  </el-table-wrapper>
</template>


<script>
  export default {

    data() {
      const data = [
        { name: 'Jack', age: 28, address: 'some where', key: '1' },
        { name: 'Rose', age: 36, address: 'some where', key: '2' },
      ]

      const columns = [{
        prop: 'name', label: 'Name', width: 100
      }, {
        prop: 'age', label: 'Age', width: 100, sortable: true
      }, {
        prop: 'address', label: 'Address', width: 200
      }, {
        label: 'Operate'
      }]

      return {
        data,
        columns
      }

    }
  }
</script>
```
