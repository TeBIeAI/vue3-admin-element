const defaultOptButtons = function (
  operate: optButtonType[] = ['edit', 'delete']
) {
  const defaultOptButtons = new Map<string, OptButton>([
    [
      'edit',
      {
        renderType: 'tipButton',
        icon: 'Edit',
        type: 'primary',
        title: '编辑'
      }
    ],
    [
      'delete',
      {
        title: '删除',
        renderType: 'popButton',
        icon: 'Delete',
        type: 'danger'
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
