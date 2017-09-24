<template>
  <div class="table-container">
    <el-table-wrapper :data="data" :configs="configs">
      <template scope="scope" slot="operate-slot">
        <el-button type="text">详情</el-button>
      </template>
    </el-table-wrapper>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Table, TableColumn, Button } from 'element-ui'
  import ElTableWrapper from './el-table-wrapper'

  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Button)
  Vue.use(ElTableWrapper)

  export default {
    data() {
      const tableConfigs = {
        table: {
          stripe: true,
          border: true
        },
        columnDefault: {
          align: 'center'
        },
        columns: [
          {
            type: 'selection',
            width: 60
          },
          {
            prop: 'ip',
            label: 'IP',
            width: 200
          },
          {
            prop: 'location.name',
            label: '最新位置信息'
          },
          {
            prop: 'latestTime',
            label: '最新上报时间',
            width: 220
          },
          {
            label: '操作',
            width: 150,
            custom: {
              scopedSlot: 'operate-slot'
            }
          }
        ]
      }
      return {
        data: [
          {
            latestTime: '2017-08-25 22:04:27',
            location: {
              name: '山东省泰安市泰山区仰圣街',
              lat: '36.195722',
              lng: '117.127579'
            },
            ip: '101.254.140.79'
          },
          {
            latestTime: '2017-08-24 22:40:54',
            location: {
              name: '天津市西青区X445(辛老线)',
              lat: '39.053856',
              lng: '117.038726'
            },
            ip: '192.168.199.163'
          },
          {
            latestTime: '2017-08-17 23:33:48',
            location: {
              name: '吉林省辽源市东丰县',
              lat: '42.687737',
              lng: '125.530098'
            },
            ip: '114.64.232.162'
          }
        ],
        configs: tableConfigs
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .table-container {
    margin: 20px 50px;
  }

</style>

