
// You should implement your task here.

module.exports = function towelSort (matrix) {
let emptyArr = []
if (arguments.length === 0) {
return emptyArr;
}
 for (i = 1; i < matrix.length; i+=2) {
    matrix[i] = matrix[i].reverse();
  };
 
  matrix = matrix.flat(Infinity);
  return matrix;
}
