// Your code here
function mapToNegativize(sourceArray) {
  const arr = sourceArray.map(el => el*-1)
  return arr
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  const arr = sourceArray.map(el => el*2)
  return arr
}

function mapToSquare(sourceArray) {
  const arr = sourceArray.map(el => Math.pow(el, 2))
  return arr
}
