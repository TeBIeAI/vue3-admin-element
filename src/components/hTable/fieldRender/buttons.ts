import { ElButton, ElTooltip } from 'element-plus'
import { defineComponent, h, PropType } from 'vue'
import Icon from '@cps/icon'

export default defineComponent({
  props: {
    field: {
      type: Object as PropType<TableColumn>,
      required: true
    }
  },
  setup(props) {
    const isRender = props.field.render === 'buttons' && props.field.buttons

    return {
      isRender
    }
  },
  render() {
    try {
      const children: any[] = []
      if (this.isRender) {
        const buttons = this.field.buttons
        for (const btn of buttons!) {
          if (btn.renderType === 'tipButton') {
            const toolTip = {
              content: btn.title
            }
            const toolTipEl = h(ElTooltip, toolTip, {
              default: () =>
                h(
                  ElButton,
                  {
                    disabled: false,
                    size: 'small',
                    type: btn.type,
                    style: {
                      padding: '4px 5px'
                    }
                  },
                  {
                    default: () => [
                      h(Icon, {
                        component: btn.icon,
                        size: 14,
                        color: '#fff'
                      }),
                      btn.text &&
                        h(
                          'span',
                          {
                            class: ['table-operate-text']
                          },
                          {
                            default: () => btn.text
                          }
                        )
                    ]
                  }
                )
            })
            children.push(toolTipEl)
          } else if (btn.renderType === 'confirmButton') {
            const toolTip = {
              content: btn.title
            }
            const toolTipEl = h(ElTooltip, toolTip, {
              default: () =>
                h(
                  ElButton,
                  {
                    disabled: false,
                    size: 'small',
                    type: btn.type,
                    style: {
                      padding: '4px 5px'
                    }
                  },
                  {
                    default: () => [
                      h(Icon, {
                        component: btn.icon,
                        size: 14,
                        color: '#fff'
                      }),
                      btn.text &&
                        h(
                          'span',
                          {
                            class: ['table-operate-text']
                          },
                          {
                            default: () => btn.text
                          }
                        )
                    ]
                  }
                )
            })
            children.push(toolTipEl)
          }
        }
      }
      const vnode = h('div', children)
      return vnode
    } catch {
      return h('div', [])
    }
  }
})
