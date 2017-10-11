
<script>
  import Vue from 'vue'
  // import { getValueByPath } from 'element-ui/src/utils/util'
  import { getValueByPath } from './util'

  export default {
    name: 'ElTableWrapper',
    data() {
      return {
        searchValue: '',
        filters: {},
        sortColumn: null,
        sortOrder: null,
        searchs: {}
      }
    },
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      columns: {
        type: Array,
        default() {
          return []
        }
      },
      showCustomHeader: {
        type: Boolean,
        default: true
      },
      columnOptions: Object,
      pagination: [Object, Boolean]
    },
    mounted() {
      const refs = this.$refs
      const tableRef = refs['ll-table']
      this.tableRef = tableRef
    },
    methods: {
      onSortClick(event, column, order) {
        event.stopPropagation()

        const tableRef = this.tableRef
        if (!tableRef) {
          return
        }
        const states = tableRef.store.states

        // TODO: 此处过于依赖el-tabel实现底层，有待优化
        // copy from element/package/table/src/table-header.js
        let sortProp = states.sortProp
        let sortOrder
        const sortingColumn = states.sortingColumn

        if (sortingColumn !== column) {
          if (sortingColumn) {
            sortingColumn.order = null
          }
          states.sortingColumn = column
          sortProp = column.property
        }

        if (!order) {
          sortOrder = column.order = null
          states.sortingColumn = null
          sortProp = null
        } else {
          sortOrder = column.order = order
        }

        states.sortProp = sortProp
        states.sortOrder = sortOrder

        tableRef.store.commit('changeSortCondition')
        // copy end
      },
      onSearchClick(event, columnAttr, column) {
        event.stopPropagation()

        if (columnAttr.searchable && typeof columnAttr.searchable === 'boolean') {
          this.doSearchFilter(column, columnAttr.prop, this.searchValue)
        }

        this.$emit('search-change', {
          column,
          prop: columnAttr.prop,
          value: this.searchValue
        })
      },
      onFilterChange(column, filterdValue) {
        // TODO: 此处依赖el-tabel实现底层，有待优化

        const tableRef = this.tableRef
        if (!tableRef) {
          return
        }

        const values = filterdValue && Array.isArray(filterdValue)
          ? filterdValue : [filterdValue]

        const store = tableRef.store
        store.commit('filterChange', {
          column: column,
          values: values
        })
      },
      onHeaderContentClick(e) {
        e.stopPropagation()
      },
      doSearchFilter(column, prop, value) {
        // TODO: 此处依赖el-tabel实现底层，有待优化

        const tableRef = this.tableRef
        if (!tableRef) {
          return
        }

        const store = tableRef.store
        store.commit('filterChange', {
          column: column,
          values: [value]
        })
      },
      searchFilterMethod(columnAttr) {
        const prop = columnAttr.prop
        return function(value, row) {
          const elementValue = prop && prop.indexOf('.') === -1
            ? row[prop] : getValueByPath(row, prop)
          const elementValueStr = elementValue.toString().toLowerCase()
          const valueStr = value.toString().toLowerCase()
          return elementValueStr.indexOf(valueStr) > -1
        }
      },
      renderHeaderContentSearch(h, columnAttr, column) {
        const that = this
        return (
          <el-input class="header-content-search" {...{
            props: {
              icon: 'search',
              onIconClick: e => that.onSearchClick(e, columnAttr, column)
            },
            on: {
              input: value => {
                that.searchValue = value
              }
            }
          }}>
          </el-input>
        )
      },
      renderHeaderContentFilter(h, columnAttr, column) {
        const that = this
        const filters = columnAttr.filters
        const key = columnAttr.columnKey || columnAttr.prop
        if (!this.filters[key]) {
          Vue.set(this.filters, key, '')
        }
        return (
          <el-select class="header-content-filter" {...{
            props: {
              value: that.filters[key],
              placeholder: columnAttr.filterPlaceholder,
              multiple: columnAttr.hasOwnProperty('filterMultiple')
                ? columnAttr.filterMultiple : true
            },
            on: {
              input: value => {
                that.filters[key] = value
                that.onFilterChange(column, value)
              }
            }
          }}>
            {
              filters && filters.map((filter, i) => {
                return (
                  <el-option {...{
                    props: {
                      label: filter.text,
                      value: filter.value
                    }
                  }}>
                  </el-option>
                )
              })
            }
          </el-select>
        )
      },
      renderHeaderContentFilterAndSearch() {

      },
      renderHeaderContent(h, columnAttr, column) {
        if (columnAttr.custom && columnAttr.custom.renderHeaderContent) {
          return columnAttr.custom.renderHeaderContent(h)
        }

        if (columnAttr.searchable) {
          return this.renderHeaderContentSearch(h, columnAttr, column)
        }

        const filterable = columnAttr.filters || columnAttr.filterMethod
        if (filterable) {
          return this.renderHeaderContentFilter(h, columnAttr, column)
        }

        return ''
      },
      renderHeaderCommon(columnAttr) {
        const that = this
        return function(h, { column, $index }) {
          return (
            <div class="table-header">
              <div class="table-header-title">
                <span>{column.label}</span>
                {
                  columnAttr.sortable &&
                  <div class="sort-caret-wrapper">
                    <div class="sort-icon-wrapper">
                      <i class="sort-icon iconfont icon-sort-up"
                        on-click={$event => that.onSortClick($event, column, 'ascending')}>
                      </i>
                    </div>
                    <div class="sort-icon-wrapper">
                      <i class="sort-icon iconfont icon-sort-down"
                        on-click={$event => that.onSortClick($event, column, 'descending')}>
                      </i>
                    </div>
                  </div>
                }
              </div>
              <div class="table-header-content"
                on-click={e => that.onHeaderContentClick(e)}>
                {that.renderHeaderContent(h, columnAttr, column)}
              </div>
            </div>
          )
        }
      },
      renderColumn(columnProps, tableProps) {
        const propsNoCustom = { ...columnProps }
        if (propsNoCustom.custom) {
          delete propsNoCustom.custom
        }

        if (tableProps.showCustomHeader) {
          propsNoCustom.renderHeader = this.renderHeaderCommon(columnProps)
        }

        if (columnProps.searchable && typeof columnProps.searchable === 'boolean') {
          propsNoCustom.filterMethod = this.searchFilterMethod(columnProps)
          propsNoCustom.columnKey = columnProps.prop
        }

        return (
          <el-table-column {...{
            props: propsNoCustom
          }}>
            {
              columnProps.custom && columnProps.custom.scopedSlot
                ? this.$scopedSlots[columnProps.custom.scopedSlot] : ''
            }
          </el-table-column>
        )
      }
    },
    render() {
      const that = this
      const tableOptions = {
        showCustomHeader: this.showCustomHeader,
        data: this.data
      }
      const defaultColumnOptions = this.columnOptions || {}

      const props = Object.assign({}, tableOptions, this.$attrs)

      return (
        <el-table class={'ll-table ' + (this.showCustomHeader ? 'custom-header' : '')}
          ref="ll-table" {...{
            props: props,
            on: this.$listeners
          }}>
          {
            this.columns.map(column => {
              const columnOptions = Object.assign({}, defaultColumnOptions, column)
              return that.renderColumn(columnOptions, tableOptions)
            })
          }
        </el-table>
      )
    }
  }
</script>

<style lang="scss">
  @import '~assets/iconfont.css';

  $bordor-bottom-line-color: #dfe6ec;

  .ll-table.custom-header {
    th>.cell {
      .caret-wrapper {
        display: none;
      }
      .el-table__column-filter-trigger {
        display: none;
      }
    }
  }

  .ll-table {
    th>.cell {
      padding-left: 0;
      padding-right: 0;
    }
    .table-header-title {
      box-sizing: border-box;
      padding-left: 18px;
      padding-right: 18px;
      height: 40px;
      border-bottom: 1px solid $bordor-bottom-line-color;

      display: flex;
      justify-content: center;
      align-items: center;

      .sort-caret-wrapper {
        cursor: pointer;
        margin-left: 5px;
        display: inline-block;
        vertical-align: middle;

        .sort-icon-wrapper {
          display: inline-block;
          width: 10px;
          height: 30px;
          text-align: center;
          overflow: hidden;
          vertical-align: middle;

          .sort-icon {
            font-size: 14px;
            color: #97a8be;
            transition: font-size 0.25s ease-out 0s;

            &:before {
              box-sizing: border-box;
            }
            &:hover {
              font-size: 20px;
              color: #48576a;
            }
          }

          .icon-sort-up {
            margin-right: -5px;
          }
          .icon-sort-down {
            margin-left: -5px;
            &:hover {
              margin-left: -8px;
            }
          }
        }
      }
    }

    .ascending .sort-caret-wrapper .sort-icon-wrapper .icon-sort-up {
      font-size: 20px;
      color: #48576a;
    }
    .descending .sort-caret-wrapper .sort-icon-wrapper .icon-sort-down {
      font-size: 20px;
      color: #48576a;
      margin-left: -8px;
    }

    .table-header-content {
      box-sizing: border-box;
      padding: 0 18px;
      height: 36px;
      cursor: default;

      display: flex;
      justify-content: center;
      align-items: center;

      .el-input {
        font-size: 12px;
      }
      .el-select {
        font-size: 12px;
      }

      .el-input__inner {
        height: 24px;
      }
    }
  }
</style>
