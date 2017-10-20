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

### Table Events

### Table Column Attributes

## Development

```
npm install
npm run play
```

## License

element-table-wrapper is released under the MIT license.
