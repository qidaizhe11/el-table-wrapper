
<script>
  export default {
    name: 'ElTableColumnWrapper',
    functional: true,
    render(h, context) {
      // const context = this
      console.log('ElTableColumnWrapper, render, context:', context)

      const isCustomHeader = context.props.customRenderHeader

      const renderHeaderCommon = function(h, { column, $index }) {
        return (
          <div class="table-header">
            <div class="table-header-title">
              <span>{column.label}</span>
            </div>
            <div class="table-header-content">
            {
              isCustomHeader && isCustomHeader(h)
            }
            </div>
          </div>
        )
      }

      return (
        <el-table-column {...{
          props: {...context.props, renderHeader: renderHeaderCommon},
          listeners: context.listeners
        }}>
        {
          context.props.customSlot ? context.data.scopedSlots[context.props.customSlot] : ''
        }
        </el-table-column>
      )
    }
  }
</script>

<style lang="scss">
  $bordor-bottom-line-color: #dfe6ec;

  $padding-size: 14px;

  .ll-table th>.cell {
    padding-left: 0;
    padding-right: 0;
  }

  .ll-table thead .el-table-column--selection {
    vertical-align: top;
    &>.cell {
      padding: 0 $padding-size;
      height: 40px;
      border-bottom: 1px solid $bordor-bottom-line-color;

      display: flex;
      align-items: center;
    }
  }

  .table-header-title {
    box-sizing: border-box;
    padding-left: $padding-size;
    padding-right: $padding-size;
    height: 40px;
    border-bottom: 1px solid $bordor-bottom-line-color;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-header-content {
    box-sizing: border-box;
    padding: 0 $padding-size;
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