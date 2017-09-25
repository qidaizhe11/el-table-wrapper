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
  // import { Table, TableColumn, Button, Input, Select, Option } from 'element-ui'
  import ElTableWrapper from './el-table-wrapper'

  // Vue.use(Table)
  // Vue.use(TableColumn)
  // Vue.use(Button)
  // Vue.use(Input)
  // Vue.use(Select)
  // Vue.use(Option)
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
            width: 200,
            custom: {
              renderHeaderContent: this.renderIpHeaderContent
            }
          },
          {
            prop: 'location.name',
            label: '最新位置信息',
            custom: {
              renderHeaderContent: this.renderLocationHeaderContent
            }
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
        configs: tableConfigs,
        ip: '10.20.30.40'
      }
    },
    methods: {
      onIpSearchClick() {
        console.log('Play, onIpSearchCLick.')
      },
      renderIpHeaderContent(h) {
        const that = this
        return (
          <el-input class="ip-header-content-input" {...{
            props: {
              icon: 'search',
              value: that.ip,
              onIconClick: that.onIpSearchClick
            }
          }}>
          </el-input>
        )
      },
      renderLocationHeaderContent(h) {
        // const that = this
        return (
          <div class="location-header-content-container">
            <el-select value="北京市">
              <el-option label="北京市" value="北京市"></el-option>
              <el-option label="四川省" value="四川省"></el-option>
            </el-select>
            <el-select value="xichengqu">
              <el-option label="西城区" value="xichengqu"></el-option>
              <el-option label="海淀区" value="haidianqu"></el-option>
            </el-select>
          </div>
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .table-container {
    margin: 20px 50px;
  }

</style>

