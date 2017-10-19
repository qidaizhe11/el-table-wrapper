<template>
  <el-table-wrapper border
    :data="data" :columns="columns">
  </el-table-wrapper>
</template>

<script>
  export default {
    data() {
      const columns = [{
        label: "Name",
        prop: "name",
        width: 150
      }, {
        label: "Age",
        prop: "age",
        width: 150
      }, {
        label: "Address",
        prop: "address"
      }];

      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`
        });
      }

      return {
        data,
        columns
      };
    }
  };
</script>