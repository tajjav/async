const transpose = function (matrix) {
  
  /*
  const a = [ [a[0][0], a[1][0], a[2][0], a[3][0]],
              [a[0][1], a[1][1], a[2][1], a[3][1]],
              [a[0][2], a[1][2], a[2][2], a[3][2]],
              [a[0][3], a[1][3], a[2][3], a[3][3]]
            ];

  const b = [ [el[0][0], el[1][r], el[2][r], el[3][r]],
              [el[c][1], el[1][1], el[2][1], el[3][1]],
              [el[c][2], el[1][2], el[2][2], el[3][2]],
              [el[c][3], el[1][3], el[2][3], el[c][r]]
            ];
  */
   
  let r = matrix.length; //outer length
  let c = matrix[0].length; // inner length
  const result = new Array(c);    
    for (let i = 0; i < c; i++) {
      result[i] = new Array(r);
      for (let j = 0; j < r; j++) {
        result[i][j] = matrix[j][i];
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