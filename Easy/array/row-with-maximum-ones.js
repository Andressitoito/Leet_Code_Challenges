/* Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

Return an array containing the index of the row, and the number of ones in it. */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
 const response = [0, 0];

 for (let i = 0; i < mat.length; i++) {
  const row = mat[i];

  const ones = row.filter((num) => num === 1).length;

  if (ones > response[1]) {
   response[0] = i;
   response[1] = ones;
  }
 }

 console.log("response ", response);

 return response;
};

rowAndMaximumOnes([
 [0, 0, 0],
 [0, 1, 1],
 [0, 1, 1],
]);

rowAndMaximumOnes([[0, 1], [1, 0]])
