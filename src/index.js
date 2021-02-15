
// You should implement your task here.

module.exports = function towelSort (matrix) {
 matrix = matrix.flat(Infinity);
  matrix.sort(function (a, b) {
    return a - b
  })

  return matrix
}
