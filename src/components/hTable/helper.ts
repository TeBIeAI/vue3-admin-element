import { EditPen, Delete } from '@element-plus/icons-vue'

const defaultOptButtons = function (
  operate: optButtonType[] = ['edit', 'delete']
) {
  const defaultOptButtons = new Map<string, OptButton>([
    [
      'edit',
      {
        renderType: 'tipButton',
        icon: EditPen,
        type: 'primary',
        title: '编辑',
        click(row, field) {
          console.log(row, field)
        }
      }
    ],
    [
      'delete',
      {
        title: '删除',
        renderType: 'confirmButton',
        icon: Delete,
        type: 'danger',
        popconfirmOption: {
          cancelButtonText: '取消',
          title: '确定删除吗',
          confirmButtonText: '确定',
          confirmButtonType: 'danger'
        },
        click(row, field) {
          console.log(row, field)
        }
      }
    ]
  ])

  const optButtons: OptButton[] = []

  for (const key in operate) {
    if (defaultOptButtons.has(operate[key])) {
      optButtons.push(defaultOptButtons.get(operate[key])!)
    }
  }
  return optButtons
}

export { defaultOptButtons }
