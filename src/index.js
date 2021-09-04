module.exports = function solveSudoku(matrix) {
  // your solution
  const cell = [];
    let doneMatrix;
        

    function empty(matrix) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] == 0) {
                    cell[0] = i;
                    cell[1] = j;
                    return true;
                }
            }
        }
        return false;
    }

    function solMatrix(matrix) {
        let i = 0,
            j = 0;
        if (empty(matrix)) {
            i = cell[0];
            j = cell[1];
            for (let n = 1; n < 10; n++) {
                if (checkRow(n, i, matrix) && checkColumn(n, j, matrix) && checkBox(n, i, j, matrix)) {
                    matrix[i][j] = n;
                    if (solMatrix(matrix)) {
                        doneMatrix = matrix;
                        return true;
                    }
                    matrix[i][j] = 0;
                }
            }
            return false;
        }
        return true;
    }
    function checkRow(n, r, matrix) {
        for (let i = 0; i < 9; i++) {
            if (matrix[r][i] == n) {
                return false;
            }
        }
        return true;
    }
    function checkColumn(n, c, matrix) {
        for (let i = 0; i < 9; i++) {
            if (matrix[i][c] == n) {
                return false;
            }
        }
        return true;
    }
    function checkBox(n, r, c, matrix) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (matrix[Math.floor(r / 3) * 3 + i][Math.floor(c / 3) * 3 + j] == n) {
                    return false;
                }
            }
        }
        return true;
    }
    solMatrix(matrix);
    return doneMatrix;
}
