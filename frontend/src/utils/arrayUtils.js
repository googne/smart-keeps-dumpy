export const insertAt = (array, idx, value) => {
  // if (value === null)
  //   return [...array.slice(0, idx), ...array.slice(idx + 1, array.length)]
  return [...array.slice(0, idx), value, ...array.slice(idx + 1, array.length)]
}

export const removeAt = (array, idx) => {
  // return insertAt(array, idx, undefined)
  return [...array.slice(0, idx), ...array.slice(idx + 1, array.length)]
}

export const clean = (array) => {
  return [
    ...array.filter(function (el) {
      return el != null
    }),
  ]
}
