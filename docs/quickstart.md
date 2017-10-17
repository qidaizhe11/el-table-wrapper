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
  <el-taber-wrapper data="data" columns="columns">
  </el-taber-wrapper>
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
        prop: 'age', label: 'Age', width: 100
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
