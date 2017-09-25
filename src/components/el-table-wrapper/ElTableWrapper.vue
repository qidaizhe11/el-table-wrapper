
<script>
  export default {
    name: 'ElTableWrapper',
    data() {
      return {
      }
    },
    props: {
      // table的配置,具体见README.md
      configs: {
        type: Object,
        required: true,
        validator(value) {
          return typeof value.columns !== 'undefined' && value.columns.length > 0
        }
      },
      data: Array
    },
    methods: {
      /**
       * 提供element table 的clearSelection方法
       * @param selection
       */
      clearSelection(selection) {
        this.$refs.table.clearSelection(selection)
      },
      /**
       * 提供element table 的toggleRowSelection方法
       * @param row
       * @param selected
       */
      toggleRowSelection(row, selected) {
        this.$refs.table.toggleRowSelection(row, selected)
      },
      /**
       * 转发element table的事件
       * @param action
       * @returns {Function}
       */
      handleEvent(action) {
        const _self = this
        return function() {
          _self.$emit(action, ...arguments)
        }
      }
    },
    render() {
      this.configs.table = this.configs.table || {}
      const tableAttr = Object.assign({}, this.configs.tableDefault, this.configs.table || {}) // 表格属性
      const columns = this.configs.columns  // 列配置
      const columnDefaultAttr = this.configs.columnDefault // 列默认配置

      // const renderHeaderCommon = function(columnAttr) {
      //   return function(createElement, { column, $index }) {
      //     return createElement('div', {
      //       class: 'table-header'
      //     }, [
      //       createElement('div', {
      //         class: 'table-header-title'
      //       }, [
      //         createElement('span', column.label)
      //       ].concat(
      //         columnAttr.custom && columnAttr.custom.sortable
      //          ? [
      //            createElement('div', {
      //              class: 'sort-caret-wrapper'
      //            }, [
      //              createElement('i', {
      //                class: 'sort-cart ascending'
      //              }),
      //              createElement('i', {
      //                class: 'sort-caret descending'
      //              })
      //            ])
      //          ]
      //          : []
      //       )),
      //       createElement('div', {
      //         class: 'table-header-content'
      //       },
      //       columnAttr.custom && columnAttr.custom.headerContent
      //         ? [columnAttr.custom.headerContent] : []
      //       )
      //     ])
      //   }
      // }

      const renderHeaderCommon = function(columnAttr) {
        return function(h, {column, $index}) {
          return (
            <div class="table-header">
              <div class="table-header-title">
                <span>{column.label}</span>
              </div>
              <div class="table-header-content">
                {columnAttr.custom && columnAttr.custom.renderHeaderContent &&
                columnAttr.custom.renderHeaderContent(h)}
              </div>
            </div>
          )
        }
      }

      /*eslint-disable */
      return <el-table ref="table"
                       class="ll-table"
                       style={{width: '100%'}}
                       data={this.data ? this.data : tableAttr.data}
                       height={tableAttr.height}
                       max-height={tableAttr.maxHeight}
                       stripe={tableAttr.stripe}
                       border={tableAttr.border}
                       fit={tableAttr.fit}
                       show-header={tableAttr.showHeader}
                       highlight-current-row={tableAttr.highlightCurrent}
                       current-row-key={tableAttr.currentRowKey}
                       row-class-name={tableAttr.rowClassName}
                       row-style={tableAttr.rowStyle}
                       row-key={tableAttr.rowKey}
                       empty-text={tableAttr.emptyText}
                       default-expand-all={tableAttr.defaultExpandAll}
                       expand-row-keys={tableAttr.expandRowKeys}
                       default-sort={tableAttr.defaultSort}
                       tooltip-effect={tableAttr.tooltipEffect}
                       on-select={this.handleEvent('select')}
                       on-select-all={this.handleEvent('select-all')}
                       on-selection-change={this.handleEvent('selection-change')}
                       on-cell-mouse-enter={this.handleEvent('cell-mouse-enter')}
                       on-cell-mouse-leave={this.handleEvent('cell-mouse-leave')}
                       on-cell-click={this.handleEvent('cell-click')}
                       on-cell-dblclick={this.handleEvent('cell-dblclick')}
                       on-row-click={this.handleEvent('row-click')}
                       on-row-contextmenu={this.handleEvent('row-contextmenu')}
                       on-row-dblclick={this.handleEvent('row-dblclick')}
                       on-header-click={this.handleEvent('header-click')}
                       on-sort-change={this.handleEvent('sort-change')}
                       on-filter-change={this.handleEvent('filter-change')}
                       on-current-change={this.handleEvent('current-change')}
                       on-header-dragend={this.handleEvent('header-dragend')}
                       on-expand={this.handleEvent('expand')}
      >
        {
          columns.map((column) => {
            const columnAttr = Object.assign({}, columnDefaultAttr, column)

            return <el-table-column
              type={columnAttr.type}
              column-key={columnAttr.columnKey}
              label={columnAttr.label}
              prop={columnAttr.prop}
              width={columnAttr.width}
              min-width={columnAttr.minWidth}
              fixed={columnAttr.fixed}
              // render-header={columnAttr.renderHeader}
              render-header={renderHeaderCommon(columnAttr)}
              sortable={columnAttr.sortable}
              sort-method={columnAttr.sortMethod}
              resizable={columnAttr.resizable}
              formatter={columnAttr.formatter}
              show-overflow-tooltip={columnAttr.showOverflowTooltip}
              align={columnAttr.align}
              header-align={columnAttr.headerAlign}
              class-name={columnAttr.className}
              label-class-name={columnAttr.labelClassName}
              selectable={columnAttr.selectable}
              reserve-selection={columnAttr.reserveSelection}
              filters={columnAttr.filters}
              filter-multiple={columnAttr.filterMultiple}
              filter-method={columnAttr.filterMethod}
              filtered-value={columnAttr.filterValue}
              header-slot={column.headerSlot}
            >
              {
                columnAttr.custom && columnAttr.custom.scopedSlot ?
                  this.$scopedSlots[columnAttr.custom.scopedSlot] : ''
              }
            </el-table-column>
          })
        }
      </el-table>
      /* eslint-enable */
    }
  }
</script>

<style lang="scss">
  $bordor-bottom-line-color: #dfe6ec;

  .ll-table th>.cell {
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
</style>
