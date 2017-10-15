
<script>
  import Vue from 'vue'
  import { Table, TableColumn, Pagination, Input, Select, Option } from 'element-ui'
  // import { getValueByPath } from 'element-ui/src/utils/util'
  import { getValueByPath, orderBy } from './util'

  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Pagination)
  Vue.use(Input)
  Vue.use(Select)
  Vue.use(Option)

  const defaultPagination = {
    currentPage: 1,
    pageSize: 10,
    layout: 'prev,pager,next'
  }

  export default {
    name: 'ElTableWrapper',
    data() {
      return {
        states: {
          filters: {},
          sortColumn: null,
          sortOrder: null,
          searches: {},
          pagination: this.getDefaultPagination()
        }
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
      columnDefault: Object,
      pagination: [Object, {
        type: Boolean,
        default: true
      }],
      defaultSort: Object
    },
    computed: {
      localData() {
        const states = this.states
        const dataSource = this.data
        let data = dataSource || []
        // 本地排序
        data = data.slice(0)
        data = this.sortData(data)
        // 筛选
        if (states.filters) {
          Object.keys(states.filters).forEach((columnKey) => {
            let col = this.findColumn(columnKey)
            if (!col) {
              return
            }
            let values = states.filters[columnKey] || []
            if (values.length === 0) {
              return
            }
            let filterMethod = col.filterMethod
            if (col.searchable) {
              filterMethod = col.searchMethod || this.getDefaultSearchMethod(col)
            }
            data = filterMethod ? data.filter(record => {
              return values.some(v => filterMethod(v, record))
            }) : data
          })
        }
        return data
      },
      currentPageData() {
        let data = this.localData
        const pagination = this.states.pagination
        // 如果没有分页的话，默认全部展示
        if (!this.hasPagination()) {
          return data
        }

        // 分页
        // ---
        // 当数据量少于等于每页数量时，直接设置数据
        // 否则进行读取分页数据
        const currentPage = this.getMaxCurrent(pagination.total || data.length)
        const pageSize = pagination.pageSize
        if (data.length > pageSize) {
          data = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        }
        return data
      }
    },
    watch: {
      pagination: {
        handler: function(val) {
          if (val === false) {
            this.states.pagination = {}
            return
          }
          this.states.pagination = {
            ...defaultPagination,
            ...this.states.pagination,
            ...val,
            currentPage: val.currentPage || 1,
            pageSize: val.pageSize || 10
          }
        },
        deep: true
      }
    },
    created() {
    },
    mounted() {
      this.columns.map((columnAttr, i) => {
        if (columnAttr.filters && columnAttr.filteredValue) {
          const values = columnAttr.filteredValue || []
          const key = this.getColumnKey(columnAttr)
          this.states.filters[key] = values
        }
      })

      if (this.defaulSort) {
        this.states.sortColumn = this.findColumnByProp(this.defaulSort.prop)
        this.states.sortOrder = this.defaulSort.order || 'ascending'
      }
    },
    methods: {
      onSortClick(event, {columnAttr, order, column}) {
        event.stopPropagation()

        let { sortColumn, sortOrder } = this.states
        // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题
        const isSortColumn = this.isSortColumn(columnAttr)
        if (!isSortColumn) {  // 当前列未排序
          sortColumn = columnAttr
          sortOrder = order
        } else {  // 当前列已排序
          if (sortOrder === order) {
            sortOrder = ''
            sortColumn = null
          } else {  // 切换为排序状态
            sortOrder = order
          }
        }

        this.states.sortOrder = sortOrder
        this.states.sortColumn = sortColumn

        // TODO: 此处依赖el-table实现底层，有待废除
        column.order = sortOrder

        this.$emit('sort-change', {
          column: sortColumn,
          prop: sortColumn ? sortColumn.prop : null,
          order: sortOrder
        })
      },
      onSearchClick(event, columnAttr, column) {
        event.stopPropagation()
        const key = this.getColumnKey(columnAttr)
        const searchValue = this.states.searches[key]

        if (columnAttr.searchable && columnAttr.searchable === true) {
          this.states.filters = Object.assign({}, this.states.filters, {
            [key]: [searchValue]
          })
        }

        if (this.hasPagination()) {
          const currentPage = 1
          this.onPageCurrentChange(currentPage)
        }

        this.$emit('search-change', {
          column: columnAttr,
          prop: columnAttr.prop,
          value: searchValue
        })
      },
      onFilterChange(columnAttr, filterdValue) {
        let values = []
        if (filterdValue) {
          values = Array.isArray(filterdValue) ? filterdValue : [filterdValue]
        }
        const key = this.getColumnKey(columnAttr)

        this.onTableFilterChange({
          [key]: values
        })
      },
      onTableSortChange({ column, prop, order }) {
        const columnAttr = column ? this.findColumn(column.columnKey || column.property) : null
        this.states.sortColumn = columnAttr
        this.states.sortOrder = order
        this.$emit('sort-change', {
          column: columnAttr,
          prop,
          order
        })
      },
      onTableFilterChange(filters) {
        const nextFilters = {
          ...this.states.filters,
          ...filters
        }

        if (this.hasPagination()) {
          // Controlled current prop will not respond user interaction
          if (!(this.pagination && typeof this.pagination === 'object' &&
            'currentPage' in this.pagination)) {
            const currentPage = 1
            this.onPageCurrentChange(currentPage)
          }
        }

        this.states.filters = nextFilters
        this.$emit('filter-change', filters)
      },
      onPageSizeChange(size) {
        const pagination = this.states.pagination
        if (pagination.onSizeChange) {
          pagination.onSizeChange(size)
        }
        const nextPagination = {
          ...pagination,
          pageSize: size
        }
        this.states.pagination = nextPagination
        this.$emit('pagination-change', nextPagination)
      },
      onPageCurrentChange(currentPage) {
        const pagination = this.states.pagination
        if (pagination.onCurrentChange) {
          pagination.onCurrentChange(currentPage)
        }
        const nextPagination = {
          ...pagination,
          currentPage: currentPage || pagination.currentPage || 1
        }
        // Controlled current prop will not respond user interaction
        if (this.pagination && typeof this.pagination === 'object' &&
          'currentPage' in this.pagination) {
          nextPagination.currentPage = pagination.currentPage
        }
        this.states.pagination = nextPagination
        this.$emit('pagination-change', nextPagination)
      },
      onHeaderContentClick(e) {
        e.stopPropagation()
      },
      getDefaultPagination() {
        const pagination = this.pagination || {}
        return this.hasPagination() ? {
          ...defaultPagination,
          ...pagination
        } : {}
      },
      hasPagination() {
        return this.pagination !== false
      },
      sortData(data) {
        const states = this.states
        const { sortColumn, sortOrder } = states
        if (!sortColumn || typeof sortColumn.sortable === 'string') {
          return data
        }
        return orderBy(data, sortColumn.prop, sortOrder, sortColumn.sortMethod)
      },
      getDefaultSearchMethod(columnAttr) {
        const prop = columnAttr.prop
        return function(value, row) {
          const elementValue = prop && prop.indexOf('.') === -1
            ? row[prop] : getValueByPath(row, prop)
          const elementValueStr = elementValue.toString().toLowerCase()
          const valueStr = value.toString().toLowerCase()
          return elementValueStr.indexOf(valueStr) > -1
        }
      },
      getMaxCurrent(total) {
        const { currentPage, pageSize } = this.states.pagination
        if ((currentPage - 1) * pageSize >= total) {
          return Math.floor((total - 1) / pageSize) + 1
        }
        return currentPage
      },
      findColumn(myKey) {
        if (!myKey) {
          return null
        }
        let column
        this.columns.map(columnAttr => {
          if (this.getColumnKey(columnAttr) === myKey) {
            column = columnAttr
          }
        })
        return column
      },
      findColumnByProp(key) {
        if (!key) {
          return null
        }
        let column
        this.columns.map(columnAttr => {
          if (columnAttr.prop === key) {
            column = columnAttr
          }
        })
        return column
      },
      getColumnKey(columnAttr, index) {
        return columnAttr.columnKey || columnAttr.prop || index
      },
      isSortColumn(columnAttr) {
        const sortColumn = this.states.sortColumn
        if (!columnAttr || !sortColumn) {
          return false
        }
        return this.getColumnKey(sortColumn) === this.getColumnKey(columnAttr)
      },
      renderHeaderContentSearch(h, columnAttr, column) {
        const that = this
        const key = this.getColumnKey(columnAttr)
        if (!this.states.searches[key]) {
          Vue.set(this.states.searches, key, '')
        }
        return (
          <el-input class="header-content-search" {...{
            props: {
              icon: 'search',
              onIconClick: e => that.onSearchClick(e, columnAttr, column)
            },
            on: {
              input: value => {
                that.states.searches[key] = value
              }
            }
          }}>
          </el-input>
        )
      },
      renderHeaderContentFilter(h, columnAttr, column) {
        const that = this
        const filters = columnAttr.filters
        const key = this.getColumnKey(columnAttr)
        if (!this.states.filters[key]) {
          Vue.set(this.states.filters, key, '')
        }
        const isMultiple = columnAttr.hasOwnProperty('filterMultiple')
          ? columnAttr.filterMultiple : true
        let filterValue = this.states.filters[key]
        if (filterValue && !isMultiple) {
          filterValue = filterValue.length > 0 ? filterValue[0] : ''
        }
        return (
          <el-select class="header-content-filter" {...{
            props: {
              value: filterValue,
              placeholder: columnAttr.filterPlaceholder,
              multiple: isMultiple,
              clearable: true
            },
            on: {
              input: value => {
                that.states.filters[key] = value
                that.onFilterChange(columnAttr, value)
              },
              clear: () => {
                that.states.filters[key] = ''
                that.onFilterChange(columnAttr, '')
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

        const filterable = columnAttr.filters
        if (filterable) {
          return this.renderHeaderContentFilter(h, columnAttr, column)
        }

        return ''
      },
      getRenderHeaderFn(columnAttr) {
        const that = this
        // TODO: sort classname should be here with table-header-title
        return function(h, { column, $index }) {
          return (
            <div class="table-header">
              <div class={'table-header-title'}>
                <span>{columnAttr.label}</span>
                {
                  columnAttr.sortable &&
                  <div class="sort-caret-wrapper">
                    <div class="sort-icon-wrapper">
                      <i class="sort-icon iconfont icon-sort-up"
                        on-click={$event => that.onSortClick($event, {
                          column: column,
                          columnAttr: columnAttr,
                          order: 'ascending'
                        })}>
                      </i>
                    </div>
                    <div class="sort-icon-wrapper">
                      <i class="sort-icon iconfont icon-sort-down"
                        on-click={$event => that.onSortClick($event, {
                          column: column,
                          columnAttr: columnAttr,
                          order: 'descending'
                        })}>
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
          propsNoCustom.renderHeader = this.getRenderHeaderFn(columnProps)
        }

        if (columnProps.searchable && columnProps.searchable === true) {
          propsNoCustom.filterMethod = null
          propsNoCustom.filters = null
          delete propsNoCustom.searchable
        }
        if (columnProps.filterMethod) {
          propsNoCustom.filterMethod = null
        }
        if (columnProps.sortable) {
          propsNoCustom.sortable = 'custom'
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
      },
      renderPagination() {
        if (!this.hasPagination) {
          return null
        }
        const { pagination } = this.states
        const total = pagination.total || this.localData.length
        if (!(total > 0)) {
          return null
        }
        return (
          <el-pagination class="ll-table-pagination" {...{
            props: {
              ...pagination,
              total: total,
              currentPage: this.getMaxCurrent(total)
            },
            on: {
              'size-change': this.onPageSizeChange,
              'current-change': this.onPageCurrentChange
            }
          }}>
          </el-pagination>
        )
      }
    },
    render() {
      const that = this
      const tableOptions = {
        showCustomHeader: this.showCustomHeader,
        data: this.currentPageData,
        defaultSort: this.defaultSort
      }
      const defaultColumnOptions = this.columnDefault || {}

      const props = Object.assign({}, tableOptions, this.$attrs)

      return (
        <div class="ll-table-container">
          <el-table class={{ 'll-table': true, 'custom-header': this.showCustomHeader }}
            ref="ll-table" {...{
              props: props,
              on: {
                ...this.$listeners,
                'filter-change': that.onTableFilterChange,
                'sort-change': that.onTableSortChange
              }
            }}>
            {
              this.columns.map(column => {
                const columnOptions = Object.assign({}, defaultColumnOptions, column)
                return this.renderColumn(columnOptions, tableOptions)
              })
            }
          </el-table>
          {this.renderPagination()}
        </div>
      )
    }
  }
</script>

<style lang="scss">
  @import './assets/iconfont.css';

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

  .ll-table-pagination {
    margin: 16px 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
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
            transition: margin 0.1s ease-in 0s;

            &:before {
              box-sizing: border-box;
            }
            &:hover {
              color: lighten(#48576a, 10);
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

      &.ascending .sort-caret-wrapper .sort-icon-wrapper .icon-sort-up {
        font-size: 20px;
        color: #48576a;
      }
      &.descending .sort-caret-wrapper .sort-icon-wrapper .icon-sort-down {
        font-size: 20px;
        color: #48576a;
        margin-left: -8px;
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
