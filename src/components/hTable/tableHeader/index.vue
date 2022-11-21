<template>
  <div class="table-header-operate">
    <el-tooltip
      v-if="buttons.includes('refresh')"
      content="刷新"
      placement="top"
    >
      <el-button type="info" class="table-btn-operate">
        <Icon :component="Refresh" color="#fff" />
      </el-button>
    </el-tooltip>
    <el-tooltip v-if="buttons.includes('add')" content="添加" placement="top">
      <el-button type="primary" class="table-btn-operate">
        <Icon :component="Plus" color="#fff" />
        <span>添加</span>
      </el-button>
    </el-tooltip>

    <!-- 右侧通用配置 -->
    <div class="table-header-config">
      <div class="operate-btn-group">
        <el-tooltip content="表格列配置" placement="top">
          <el-dropdown trigger="click" :hide-on-click="false">
            <span class="el-dropdown-link">
              <el-button class="right-border">
                <Icon :component="Grid" />
              </el-button>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <template v-for="(col, index) in cloneColumn" :key="index">
                  <el-dropdown-item>
                    <el-checkbox
                      v-if="col.prop"
                      @change="onChangeColumnHandle($event, col.prop!)"
                      :model-value="col.show"
                      :checked="!col.show"
                      :label="col.label"
                    ></el-checkbox>
                  </el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-tooltip>
        <el-tooltip content="搜索" placement="top">
          <el-button>
            <Icon :component="Search" />
          </el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OptHeaderButtons } from '/types/table'
import { useTableContext } from '@/hooks/useTableContext'
import { Plus, Refresh, Grid, Search } from '@element-plus/icons-vue'
import { computed } from 'vue'

interface Props {
  name: string
  buttons?: OptHeaderButtons[]
}

const props = withDefaults(defineProps<Props>(), {
  name: 'h-table',
  buttons: () => ['refresh', 'add', 'edit', 'delete']
})

const table = useTableContext(props.name)
const onChangeColumnHandle = (value: boolean, prop: string) => {
  table.onTableHeaderAction('column-show-change', { prop, value })
}

const cloneColumn = computed(() => {
  const cloneColumnArr = []
  for (const item of table.table.column) {
    item.prop && !item.buttons && cloneColumnArr.push(item)
  }
  return cloneColumnArr
})
</script>

<style scoped lang="scss">
.table-header-operate {
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;

  .operate-btn-group {
    display: flex;
    align-items: center;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
    overflow: hidden;

    .el-button {
      border: none;
      border-radius: 0;
    }

    .right-border {
      border-right: 1px solid var(--el-border-color);
    }
  }

  .table-btn-operate {
  }

  .table-header-config {
    display: flex;
    margin-left: auto;
  }
}
</style>
