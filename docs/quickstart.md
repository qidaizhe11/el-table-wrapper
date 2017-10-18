# Qucik start

# Install

```
npm install element-table-wrapper
```

# Import in your project

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import ElTableWrapper from 'element-table-wrapper'

Vue.use(ElementUI)
Vue.use(ElTableWrapper)
```

# Basic Usage

```html
/*vue*/
<desc>
</desc>
<template>
  <el-table-wrapper :data="data" :columns="columns">
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
