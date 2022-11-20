import { ElIcon } from 'element-plus'
import { computed, CSSProperties, defineComponent, h } from 'vue'
import { cloneDeep } from 'lodash-es'

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String
    },
    size: {
      type: Number,
      default: 18
    },
    color: {
      type: String,
      default: '#000'
    },
    component: {
      type: Object
    }
  },
  setup(props) {
    const getStyle = computed((): CSSProperties => {
      const { color, size } = props

      return {
        color: color,
        fontSize: `${size}px`
      }
    })

    return () => {
      if (typeof props.component === 'object') {
        const _copyCom = cloneDeep(props.component)
        return h(
          ElIcon,
          { style: getStyle.value },
          {
            default: () => h(_copyCom)
          }
        )
      }
    }
  }
})
