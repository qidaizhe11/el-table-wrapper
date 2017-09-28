<template>
  <div class="table-container">
    <el-table-wrapper ref="table" :data="data">
      <el-table-column-wrapper type="selection" width="60">
      </el-table-column-wrapper>
      <el-table-column-wrapper label="IP" prop="ip" width="150" :custom-render-header="renderIpHeader">
      </el-table-column-wrapper>
      <el-table-column-wrapper label="最新位置信息" prop="location.name" width="220">
      </el-table-column-wrapper>
      <el-table-column-wrapper label="最新上报时间" prop="latestTime" width="200">
      </el-table-column-wrapper>
      <el-table-column-wrapper label="操作" align="center">
        <template scope="scope">
          <div class="button-group-container">
            <el-button class="edit-button" size="small" @click="onModifyClick">编辑
            </el-button>
            <el-button class="delete-button" size="small">
              删除
            </el-button>
          </div>
        </template>
      </el-table-column-wrapper>
    </el-table-wrapper>
  </div>
</template>

<script>
  import Vue from 'vue'
  // import { Table, TableColumn, Button, Input, Select, Option } from 'element-ui'
  // import ElTableWrapper from './table-wrapper-2/ElTableWrapper'
  // import ElTableColumnWrapper from './table-wrapper-2/ElTableColumnWrapper'
  import { ElTableWrapper, ElTableColumnWrapper } from './table-wrapper-2'

  // Vue.use(Table)
  // Vue.use(TableColumn)
  // Vue.use(Button)
  // Vue.use(Input)
  // Vue.use(Select)
  // Vue.use(Option)
  Vue.use(ElTableWrapper)
  Vue.use(ElTableColumnWrapper)

  export default {
    data() {
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
        ip: '120.8'
      }
    },
    // components: {
    //   ElTableWrapper,
    //   ElTableColumnWrapper
    // },
    methods: {
      onIpSearchClick() {
        console.log('Play, onIpSearchCLick.')
      },
      onModifyClick() {
        console.log('Play2, onModifyClick')
      },
      renderIpHeader(h) {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-container {
    margin: 20px 50px;
  }
</style>

