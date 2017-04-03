export default function logEq(x, y, propName, compare = (a, b) => a === b) {
  const result = compare(x[propName], y[propName])
  if (!result) {
    console.log(`${propName} is changed`)
  }
  return result
}
