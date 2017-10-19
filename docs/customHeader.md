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

## sort

custom header下`sort`用法跟`el-table`完全一致

## filter

```html
/*vue*/
<template>
  <el-table-wrapper border
    :data="tableData" :columns="tableColumns" :show-custom-header="true">
    <template scope="scope">
      <el-tag
        :type="scope.row.tag === '家' ? 'primary' : 'success'"
        close-transition>{{scope.row.tag}}</el-tag>
    </template>
  </el-table-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }],
        tableColumns: [{
          prop: 'date',
          label: '日期',
          sortable: true,
          width: 180
        }, {
          prop: 'name',
          label: '姓名',
          width: 180
        }, {
          prop: 'address',
          label: '地址'
        }, {
          prop: 'tag',
          label: '标签',
          width: 130,
          filters: [{
            text: '家', value: '家'
          }, {
            text: '公司', value: '公司'
          }],
          filterMethod: this.filterTag,
          scopedSlot: 'address-slot'
        }]
      }
    },
    methods: {
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
```
