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
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
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