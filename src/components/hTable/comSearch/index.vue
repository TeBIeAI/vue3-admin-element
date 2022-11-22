<template>
  <div class="table-header-search-form">
    <el-form :model="table.comSearchForm.form">
      <el-row>
        <template v-for="item in columns" :key="item.prop">
          <template v-if="item.operator !== false">
            <!-- date-range -->
            <el-col v-if="item.operator === 'date-range'" :sm="12" :xs="24">
              <div class="com-search-col">
                <div class="com-search-col-label-range">{{ item.label }}</div>
                <div class="com-search-col-input-range">
                  <el-date-picker
                    class="datetime-pick-renge"
                    v-model="table.comSearchForm.form[item.prop!]"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                  />
                </div>
              </div>
            </el-col>
            <el-col v-else :xs="24" :sm="6">
              <div class="com-search-col">
                <div class="com-search-col-label">
                  {{ item.label }}
                </div>

                <div v-if="item.render === 'tag'" class="com-search-col-input">
                  <el-select
                    clearable
                    v-model="table.comSearchForm.form[item.prop!]"
                  >
                    <el-option
                      v-for="(opt, okey) in item.replaceValue"
                      :key="okey"
                      :label="opt"
                      :value="okey"
                    ></el-option>
                  </el-select>
                </div>
                <div
                  v-else-if="item.operator === 'date'"
                  class="com-search-col-input"
                >
                  <el-date-picker
                    v-model="table.comSearchForm.form[item.prop!]"
                    type="date"
                    class="datetime-pick-renge"
                  />
                </div>
                <div
                  v-else-if="item.render === 'switch'"
                  class="com-search-col-input"
                >
                  <el-select
                    v-model="table.comSearchForm.form[item.prop!]"
                    :clearable="true"
                  >
                    <template
                      v-if="
                        item.replaceValue &&
                        Object.keys(item.replaceValue)?.length
                      "
                    >
                      <el-option
                        v-for="(opt, okey) in item.replaceValue"
                        :key="okey"
                        :label="opt"
                        :value="okey"
                      ></el-option>
                    </template>
                    <template v-else>
                      <el-option label="正常" value="1"></el-option>
                      <el-option label="异常" value="0"></el-option>
                    </template>
                  </el-select>
                </div>

                <div v-else class="com-search-col-input">
                  <el-input
                    v-model="table.comSearchForm.form[item.prop!]"
                  ></el-input>
                </div>
              </div>
            </el-col>
          </template>
        </template>

        <el-col>
          <div class="col-search-operator">
            <el-button type="primary" @click="onSearchSubmit">搜索</el-button>
            <el-button>重置</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useTableContext } from '@/hooks/useTableContext'
import { computed } from 'vue'

interface Props {
  name: string
}
const props = defineProps<Props>()

const table = useTableContext(props.name)

const columns = computed(() => table.table.column)

const onSearchSubmit = () => {
  table.onTaleAction('com-search', table.comSearchForm.form)
}
</script>

<style scoped lang="scss">
.table-header-search-form {
  width: 100%;
  background-color: #fff;
  padding: 15px;

  .com-search-col {
    width: 100%;
    display: flex;
    padding-top: 10px;
    align-items: center;

    &-label {
      width: 33.3%;
      text-align: right;
      padding: 0 15px;
    }

    &-input {
      width: 66.6%;
      padding: 0 15px;
    }
    &-label-range {
      width: 16.6%;
      text-align: right;
      padding: 0 15px;
    }

    &-input-range {
      width: 83.4%;
      padding: 0 15px;
    }
  }
  .col-search-operator {
    display: flex;
    justify-content: end;
    padding: 15px;
  }
}

:deep(.datetime-pick-renge) {
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>
