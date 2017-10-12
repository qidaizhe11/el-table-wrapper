<template>
  <div class="table-container">
    <!-- <el-table-wrapper :data="data" :configs="configs">
                    <template scope="scope" slot="operate-slot">
                      <el-button type="text">详情</el-button>
                    </template>
                  </el-table-wrapper> -->
    <el-table-wrapper stripe border :data="data" :columns="columns" :column-default="columnDefault"
      :pagination="pagination" :show-custom-header="true" :default-sort="defaultSort"
      @sort-change="onTableSortChange" @search-change="onTableSearchChange" @filter-change="onTableFilterChange">
      <template scope="scope" slot="operate-slot">
        <el-button type="text">详情</el-button>
      </template>
      <template scope="scope" slot="location-slot">
        <el-tag>{{scope.row.location.name}}</el-tag>
      </template>
    </el-table-wrapper>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Table, TableColumn, Button, Input, Select, Option, Tag } from 'element-ui'
  import ElTableWrapper from './el-table-wrapper'

  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Button)
  Vue.use(Input)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Tag)
  Vue.use(ElTableWrapper)

  export default {
    data() {
      const tableConfig = {
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
            sortable: true,
            searchable: true,
            custom: {
            }
          },
          {
            prop: 'location.name',
            label: '最新位置信息',
            sortable: true,
            // searchable: true,
            columnKey: 'location.name',
            filters: [{ text: '河南', value: '河南' }, { text: '新疆', value: '新疆' }],
            filterMethod: (value, row) => {
              return row.location.name === value
            },
            filterPlaceholder: '位置',
            filterMultiple: false,
            // filteredValue: ['河南'],
            custom: {
              // renderHeaderContent: this.renderLocationHeaderContent,
              scopedSlot: 'location-slot'
            }
          },
          {
            prop: 'latestTime',
            label: '最新上报时间',
            // searchable: true,
            filters: [{ text: 'hehe', value: 'hehe' }, { text: 'nimei', value: 'nimei' }],
            filterPlaceholder: '时间',
            // filterMultiple: false,
            filteredValue: ['nimei'],
            width: 220
          },
          {
            label: '操作',
            width: 150,
            custom: {
              scopedSlot: 'operate-slot'
            }
          }
        ],
        pagination: {
          pageSize: 20,
          total: this.totalCount,
          layout: 'total, sizes, prev, pager, next, jumper',
          pageSizes: [10, 20, 50, 100],
          onSizeChange: this.onPageSizeChange,
          onCurrentChange: this.onPageCurrentChange
        },
        defaultSort: {
          prop: 'ip',
          order: 'descending'
        }
      }
      let tableData = []
      for (let i = 0; i < 10; ++i) {
        tableData = tableData.concat([
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
        ])
      }
      return {
        data: tableData,
        columns: tableConfig.columns,
        columnDefault: tableConfig.columnDefault,
        pagination: tableConfig.pagination,
        defaultSort: tableConfig.defaultSort
      }
    },
    methods: {
      onIpSearchClick() {
        console.log('Play, onIpSearchCLick.')
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
      },
      onTableSortChange(value) {
        console.log('Play, onSortChange, value:', value)
      },
      onTableSearchChange(value) {
        console.log('Play, onSearchChange, value:', value)
      },
      onTableFilterChange(filters) {
        console.log('Play, onFilterChange, filters:', filters)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-container {
    margin: 20px 50px;
  }
</style>

