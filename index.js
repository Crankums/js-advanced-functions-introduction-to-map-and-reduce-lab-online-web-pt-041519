// Your code here
function mapToNegativize(src) {
  let arr = []
  for (let i=0; i<src.length; i++) {
    i*-1
    arr.push(i)
  }
  return arr
}

function mapToNoChange(src) {
  return src
}
