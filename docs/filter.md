# Filter

Filter 用法与 [el-table](http://element.eleme.io/1.4/#/zh-CN/component/table) 基本一致，需留意：

> 非 `custom header` 下启用 Filter 功能请务必为该列指定 `columnKey`

原因：该功能实现基于 el-table 的 `filter-change` 回调（为良好结合分页，已屏蔽 el-table 底层 filter 功能），filter-change 返回依赖 `columnKey` 参数。

```html
/*vue*/
<desc>
* 非`custom header`下启用Filter功能请务必为该列指定`columnKey`
</desc>
<template>
  <el-table-wrapper border
    :data="tableData" :columns="tableColumns" :show-custom-header="false">
    <template slot-scope="scope" slot="address-slot">
      <el-tag
        :type="scope.row.tag === '家' ? 'primary' : 'success'"
        close-transition>
        {{scope.row.tag}}
      </el-tag>
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
          columnKey: 'tag',
          filters: [{
            text: '家', value: '家'
          }, {
            text: '公司', value: '公司'
          }],
          filterMethod: this.filterTag,
          filterMultiple: false,
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
