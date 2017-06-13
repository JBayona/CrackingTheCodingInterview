/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0
*/

function setZeros(matrix){
  var row = new Array(matrix.length);
  var column = new Array(matrix[0].length);

  //Store the row and column index with value 0
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0){
        row[i] = true;
        column[j] = true;
      }
    }
  }

  //Set arr[i][j] to 0 if either row i or column j has a 0
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[0].length; j++){
      if(row[i] || column[j]){
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

matrix =[ [1, 2, 5],
          [0, 5, 6],
          [7, 8, 0]];
console.log(setZeros(matrix));