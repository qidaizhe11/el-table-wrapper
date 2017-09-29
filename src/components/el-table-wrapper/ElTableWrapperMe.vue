
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
    methods: {
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
                    <i class="sort-icon iconfont icon-sort-up"></i>
                    <i class="sort-icon iconfont icon-sort-down"></i>
                  </div>
                }
              </div>
              <div class="table-header-content">
                {that.renderHeaderContent(h, columnAttr)}
              </div>
            </div>
          )
        }
      }
    },
    render() {
      const that = this
      const tableOptions = Object.assign({}, defaultTableOptions, this.options || {})
      const columnOptions = this.columnOptions || {}

      const props = Object.assign({}, tableOptions || {}, this.$attrs)
      props.data = this.data || tableOptions.data

      return (
        <el-table class="ll-table" {...{
          props: props,
          listeners: this.$listeners
        }}>
          {
            this.columns.map(column => {
              const columnProps = Object.assign({}, columnOptions, column)
              if (columnProps.custom) {
                delete columnProps.custom
              }
              columnProps.sortable = false
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

        .sort-icon {
          font-size: 16px;
          // font-style:
          color: #97a8be;
          transition: font-size 0.25s ease-out 0s;

          display: inline-block;
          text-align: center;

          &:before {
            box-sizing: border-box;
          }
        }

        .sort-icon:hover {
          font-size: 20px;
          color: #48576a;
        }

        .icon-sort-up {
          margin-right: -6px;
        }
        .icon-sort-down {
          margin-left: -6px;
        }
      }
    }

    .table-header-content {
      box-sizing: border-box;
      padding: 0 18px;
      height: 36px;

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


