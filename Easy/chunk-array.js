/* Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function. */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) { };

const chunkk = (arr, size) => {
 if (arr.length === 0) {
  return arr;
 }
 let chunk = [];

 while (true) {
  let chunki = arr.splice(0, size);
  chunk.push(chunki);

  if (arr.length < size) {
   break;
  }
 }

 if (arr.length === 0) {
  return chunk;
 }
 chunk.push(arr);
 return chunk;
};

chunkk([3, 4, 56, 6, 7], 4);
