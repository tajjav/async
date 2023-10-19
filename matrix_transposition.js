const transpose = function (matrix) {
  // Replace this code with your solution
  /*
  const a = [ [a[0][0], a[1][0], a[2][0], a[3][0]],
              [a[0][1], a[1][1], a[2][1], a[3][1]],
              [a[0][2], a[1][2], a[2][2], a[3][2]],
              [a[0][3], a[1][3], a[2][3], a[3][3]]
            ];

  const b = [ [el[c][r], el[1][r], el[2][r], el[3][r]],
              [el[c][1], el[1][1], el[2][1], el[3][1]],
              [el[c][2], el[1][2], el[2][2], el[3][2]],
              [el[c][3], el[1][3], el[2][3], el[c][r]]
            ];
  */
  const result = [];
  // for (const row of matrix) {
  //   for (const el of row) {
    //let c = i.length; // inner length
      let r = matrix.length;//outer length
    for (let i; i <= r; i++) {
      
      for (let j; j <= c; j++) {
        result.push(matrix[i][j]);
      }
    }  
            
  
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));