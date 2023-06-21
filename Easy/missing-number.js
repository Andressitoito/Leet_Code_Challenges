/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
 // O(1) Constant Time Complexity
 nums.sort(function (a, b) {
  return a - b;
 });
 // O(1) Constant Time Complexity
 let counter = -1;
 // O(1) Constant Time Complexity
 let notListed = 0;
 // O(n) Linear Time Complexity
 for (let i = 0; i < nums.length + 1; i++) {
  // O(1)// O(1) Constant Time Complexity
  counter++;
  // O(1) Constant Time Complexity	
  if (counter !== nums[i]) {
   notListed = counter;
   break;
  }
 }
 return notListed;
};
