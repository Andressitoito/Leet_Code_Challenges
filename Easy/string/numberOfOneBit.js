/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

 const binaryNumber = n.toString(2)

 let sum = 0;

 for (let index = 0; index < binaryNumber.length; index++) {
  const element = binaryNumber[index];
  if (parseInt(element) === 1) {
   sum++;
  }
 }
 return sum;
};

console.log(hammingWeight(11));
