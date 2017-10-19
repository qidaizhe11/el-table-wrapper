# Pagination
> pagination component work well with filter/search/sort based on el-pagination

`pagination`属性默认`true`，即默认显示分页组件，设为`false`时不展示和进行分页。

```html
/*vue*/
<template>
  <el-table-wrapper border
    :data="data" :columns="columns" :pagination="pagination" :show-custom-header="true">
  </el-table-wrapper>
</template>

<script>
  export default {
    data() {
      const columns = [{
        label: "Name",
        prop: "name",
        searchable: true,
        sortable: true,
        width: 150
      }, {
        label: "Age",
        prop: "age",
        width: 150
      }, {
        label: "Address",
        prop: "address",
        searchable: true,
        sortable: true
      }];

      const data = [];
      for (let i = 0; i < 96; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`
        });
      }

      return {
        data,
        columns,
        pagination: {
          pageSize: 20,
          layout: 'total, sizes, prev, pager, next',
          pageSizes: [10, 20, 50, 100],
          onSizeChange: this.onPageSizeChange,
          onCurrentChange: this.onPageCurrentChange
        }
      };
    },
    onPageSizeChange(size) {
      console.log('onPageSizeChange, size:', size)
    },
    onPageCurrentChange(current) {
      console.log('onPageCurrentChange, current page:', current)
    }
  };
</script>
```

## outside controled pagination

若传入`pagination`参数带有`currentPage`属性，需通过回调`onCurrentChange`自行控制翻页

## related properties

### el-table-wrapper

| Property   | Desc    | Type | Default value |
| ------------- | ------------- | --- | --- |
| pagination  | 分页器，配置项参考 [el-pagination](http://element.eleme.io/1.4/#/zh-CN/component/pagination)，设为 false 时不展示和进行分页 | Object | - |

### pagination

参考[el-pagination](http://element.eleme.io/1.4/#/zh-CN/component/pagination)，默认配置如下：

| Property   | Desc    | Type | Default value |
| ------------- | ------------- | --- | --- |
| page-size  |  | Number | 10 |
| current-page  |  | Number | 1 |
| layout  |  | String | 'prev,pager,next' |
