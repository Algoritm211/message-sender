export function stringCutter (str, sizeStr) {
  const size = sizeStr

  if (str.length > size) {
    return str.slice(0, size) + '...'
  }
  return str
}