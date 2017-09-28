
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
                delete columnOptions.custom
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

