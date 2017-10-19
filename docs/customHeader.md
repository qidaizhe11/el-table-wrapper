# Show Custom Header

Table属性 `show-custom-header` 控制表格头搜索/筛选行的显示与否

## render custom header

```html
/*vue*/
<desc>
</desc>
<template>
  <el-table-wrapper border stripe
   :data="data" :columns="columns" :show-custom-header="true">
  </el-table-wrapper>
</template>

<script>
  export default {
    data() {
      const data = [
        {
          date: '2016-05-03',
          name: 'Tom',
          age: 19,
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          age: 27,
          address: 'No. 187, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          age: 65,
          address: 'No. 182, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          age: 12,
          address: 'No. 184, Grove St, New York'
        }
      ]

      const columns = [{
        prop: 'name', label: 'Name', width: 160
      }, {
        prop: 'age', label: 'Age', width: 120, sortable: true
      }, {
        prop: 'address', label: 'Address', searchable: true
      }, {
        prop: 'date', label: 'Date', width: 180
      }]

      return {
        data,
        columns
      }

    }
  }
</script>
```
