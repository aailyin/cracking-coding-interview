/*
 Напишите алгоритм, реализующий следующее условие: если элемент матрицы M x N равен 0, 
 то весь столбец и вся строка обнуляются.
*/
// My solution:
function zero(matrix) {
    const M = matrix.length,
          N = matrix[0].length;
    let i = 0, j = 0;

    for (i; i < M; i++) {
        matrix[i].push(false);
    }
    let row = new Array(N);
    for (i = 0; i < N; i++) {
        row[i] = false;
    }
    matrix.push(row);

    // save all rows and columns to fill by zero
    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
            if (!matrix[i][j]) { 
                matrix[i][N] = true;
                matrix[M][j] = true;
            }
        }
    }

    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
            if (matrix[M][i] && matrix[j][N]) {
                fillZero(j, i);
            }
        }
    }

    function fillZero(i, j) {
        let k = 0;

        for (k; k < N; k++) {
            matrix[i][k] = 0;
        }

        for (k = 0; k < M; k++) {
            matrix[k][j] = 0;
        }
    }
    // remove metadata
    matrix.length = M;
    for (i = 0; i < M; i++) {
        matrix[i].length = N;
    }
    return matrix;
}
