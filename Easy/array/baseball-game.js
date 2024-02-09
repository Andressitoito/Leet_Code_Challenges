/* You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid. */
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
 let record = [];

 for (let i = 0; i < operations.length; i++) {
  const op = operations[i];

  if (op == '+' && i === 0) {
   continue;
  }

  if (!isNaN(op)) {

   record.push(op * 1);
  } else {

   if (op === '+') {
    const num = record[record.length - 1] + record[record.length - 2];
    record.push(num);
   } else if (op === 'D') {
    const num = record[record.length - 1] * 2;
    record.push(num);
   } else if (op === 'C') {
    record.pop();
   }
  }
 }

 let sum = 0;

 for (let i = 0; i < record.length; i++) {
  sum += record[i];
 }

 console.log(sum)

 return sum;
};