export const getInputFieldParams = (name, label, type) => {
  if (!label) {
    label = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
    label = label.replace(/([A-Z])/g, ' $1').trim()
  }
  const inputTypes = ['email', 'number', 'password', 'text']
  if (!type) {
    let found = false
    inputTypes.map((option, id) => {
      if (name.toLowerCase().includes(option)) {
        type = option
        found = true
        return
      }
    })
    if (!found) {
      type = 'text'
    }
  }
  return {
    // name,
    label,
    type,
    placeholder: `Enter ${label} ...`,
  }
}

export const getSelectParams = (name, label, options) => {
  return {
    ...getInputFieldParams(name, label, 'select'),
    options,
  }
}
