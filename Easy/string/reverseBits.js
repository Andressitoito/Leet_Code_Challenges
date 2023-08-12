/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

function decimalToBinary(decimal, numBits) {
 let binaryString = decimal.toString(2);
 while (binaryString.length < numBits) {
   binaryString = '0' + binaryString;
 }
 return binaryString;
}

var reverseBits = function (n) {
 let binaryNumber2 = decimalToBinary(n, 32);

 let reverse = binaryNumber2.split('').reverse().join('')

 let reversed = parseInt(reverse, 2);

 return reversed;
};

reverseBits(29946352);
