export const getValueByPath = function(object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

const isObject = function(obj) {
  return obj !== null && typeof obj === 'object'
}

export const orderBy = function(array, sortKey, reverse, sortMethod) {
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1
  }
  if (!sortKey && !sortMethod) {
    return array
  }
  const order = (reverse && reverse < 0) ? -1 : 1

  // sort on a copy to avoid mutating original array
  return array.slice().sort(sortMethod ? function(a, b) {
    const result = sortMethod(a, b)
    return result === 0 ? 0 : result > 0 ? order : -order
  } : function(a, b) {
    if (sortKey !== '$key') {
      if (isObject(a) && '$value' in a) a = a.$value
      if (isObject(b) && '$value' in b) b = b.$value
    }
    a = isObject(a) ? getValueByPath(a, sortKey) : a
    b = isObject(b) ? getValueByPath(b, sortKey) : b
    return a === b ? 0 : a > b ? order : -order
  })
}
