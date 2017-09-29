
<script>
  const defaultTableOptions = {
    customShowHeader: true
  }

  export default {
    name: 'ElTableWrapper',
    data() {
      return {
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
      options: Object,
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
        console.log('ElTableWrapperMe, onSortClick, tableRef:', tableRef)
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
      onHeaderContentClick(e) {
        e.stopPropagation()
      },
      renderHeaderContentSearch() {
        return (
          <el-input class="header-content-search" {...{
            props: {
              icon: 'search'
            }
          }}>
          </el-input>
        )
      },
      renderHeaderContentFilter() {

      },
      renderHeaderContentFilterAndSearch() {

      },
      renderHeaderContent(h, columnAttr) {
        if (columnAttr.custom && columnAttr.custom.renderHeaderContent) {
          return columnAttr.custom.renderHeaderContent(h)
        }

        if (columnAttr.sortable) {
          return this.renderHeaderContentSearch()
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
              <div class="table-header-content" on-click={e => that.onHeaderContentClick(e)}>
                {that.renderHeaderContent(h, columnAttr)}
              </div>
            </div>
          )
        }
      },
      onTableSortChange(value) {
        console.log('ElTableWrapperMe, onTableSortChange, value:', value)
      }
    },
    render() {
      const that = this
      const tableOptions = Object.assign({}, defaultTableOptions, this.options || {})
      const columnOptions = this.columnOptions || {}

      const props = Object.assign({}, tableOptions || {}, this.$attrs)
      props.data = this.data || tableOptions.data

      return (
        <el-table class="ll-table" ref="ll-table" {...{
          props: props,
          on: this.$listeners
        }}>
          {
            this.columns.map(column => {
              const columnProps = Object.assign({}, columnOptions, column)
              if (columnProps.custom) {
                delete columnProps.custom
              }
              if (tableOptions.customShowHeader) {
                columnProps.renderHeader = that.renderHeaderCommon(column)
              }

              return (
                <el-table-column {...{
                  props: columnProps
                }}>
                  {
                    column.custom && column.custom.scopedSlot
                      ? this.$scopedSlots[column.custom.scopedSlot] : ''
                  }
                </el-table-column>
              )
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

  .ll-table {
    th>.cell {
      padding-left: 0;
      padding-right: 0;

      .caret-wrapper {
        display: none;
      }
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

      .el-input__inner {
        height: 24px;
      }
    }
  }
</style>


