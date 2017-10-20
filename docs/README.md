# element-table-wrapper

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]
[![gzip size][badgesize-image]][badgesize-url]

[npm-image]: https://img.shields.io/npm/v/element-table-wrapper.svg
[npm-url]: https://www.npmjs.org/package/element-table-wrapper
[travis-image]: https://travis-ci.org/qidaizhe11/element-table-wrapper.svg?branch=master
[travis-url]: https://travis-ci.org/qidaizhe11/element-table-wrapper
<!-- [coveralls-image]: https://img.shields.io/coveralls/react-component/table.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/table?branch=master -->
[download-image]: https://img.shields.io/npm/dm/element-table-wrapper.svg
[download-url]: https://npmjs.org/package/element-table-wrapper
[badgesize-image]: http://img.badgesize.io/https://unpkg.com/element-table-wrapper?compression=gzip
[badgesize-url]: https://github.com/qidaizhe11/element-table-wrapper

> A Vue2 table component based on el-table of Element UI with pagination support.

## Install

[![element-table-wrapper](https://nodei.co/npm/element-table-wrapper.png)](https://npmjs.org/package/element-table-wrapper)

## Documentation
[https://qidaizhe11.github.io/element-table-wrapper](https://qidaizhe11.github.io/element-table-wrapper)

![image](https://github.com/qidaizhe11/element-table-wrapper/blob/master/docs/img/show.gif)

## Usage

```html
<template>
  <el-table-wrapper :data="data" :columns="columns">
  </el-table-wrapper>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  import ElTableWrapper from 'element-table-wrapper'

  Vue.use(ElementUI)
  Vue.use(ElTableWrapper)

  export default {
    data() {
      const data = [
        {
          date: '2016-05-03',
          name: 'Tom',
          age: 19,
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          age: 65,
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          age: 12,
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]

      const columns = [{
        prop: 'name', label: 'Name', width: 160
      }, {
        prop: 'age', label: 'Age', width: 120
      }, {
        prop: 'address', label: 'Address'
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

## API

### Table Attributes

在 [el-table](http://element.eleme.io/1.4/#/zh-CN/component/table) Table Attributes 基础上，扩展如下参数：

| Property   | Desc    | Type | Accepted Values | Default value |
| ------------- | ------------- | --- | --- | --- |
| columns | 表格列的配置描述，具体项见下表 Table-column Attributes | ColumnProps[] | - | - |
| columnDefault | 表格列默认配置，具体见下表 Table-column Attributes，将会被columns列同名参数覆盖 | ColumnProps | - | - |
| show-custom-header | 标题栏是否显示自定义搜索/筛选栏 | boolean | - | false |
| pagination  | 分页器，配置项参考 [el-pagination](http://element.eleme.io/1.4/#/zh-CN/component/pagination)，设为 false 时不展示和进行分页 | Object | - | - |

### Table Events

在 [el-table](http://element.eleme.io/1.4/#/zh-CN/component/table) Table Events 基础上，扩展如下事件：

| Event Name | Description | Parameters |
| --- | --- | --- |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, columnAttr, prop, order } |
| search-change | 当表格的搜索条件发生变化时会触发该事件 | { columnAttr, prop, order } |
| pagination-change | 当分页发生变化时触发 | pagination |

### Table-column Attributes

在 [el-table](http://element.eleme.io/1.4/#/zh-CN/component/table) Table-column Attributes 基础上，扩展如下参数：

| Property   | Desc    | Type | Accepted Values | Default value |
| ------------- | ------------- | --- | --- | --- 
| searchable | 对应列是否可以搜索（只在show-custom-header下有效），如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 search-change事件 | boolean, string | true, false, 'custom' | false |
| searchMethod | 对数据进行搜索时使用的方法，仅当searchable设置为true时有效，用法同filter-method，需返回一个布尔值 | Function(value, row) | - | - |
| scopedSlot | 自定义列模板的slot名称（不支持匿名slot） | String | - | - |
| custom.renderHeaderContent | show-custom-header下列标题搜索栏区域渲染使用的Function | Function(h, { column, $index }) | - | - |


## Development

```
npm install
npm run play
```

## License

element-table-wrapper is released under the MIT license.
