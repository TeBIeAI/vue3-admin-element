<script lang="ts">
import { ElTableColumn } from 'element-plus'
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'Column',
  props: {
    attrs: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => {
      return h(ElTableColumn, props.attrs, {
        default: slots.default
      })
    }
  }
})
</script>
