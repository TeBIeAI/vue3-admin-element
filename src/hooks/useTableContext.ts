import { inject, provide } from 'vue'
import type hTableClass from '@/utils/table'

export function createTableContext(key: string, instance: any) {
  provide(key, instance)
}

export function useTableContext(key: string) {
  return inject(key) as hTableClass
}
