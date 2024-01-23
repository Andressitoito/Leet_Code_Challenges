/* Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
 nums.sort((a, b) => a - b);

 const response = [];

 const compare = [];

 const mySet = new Set();

 for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  mySet.add(num);
 }

 for (const num of mySet) {
  compare.push(num);
 }

 let index = 0;

 for (let i = 0; i < nums.length; i++) {
  const num = i + 1;

  console.log("num ", num);

  if (num == compare[index]) {
   index++;
  } else {
   console.log("not found ");

   response.push(i + 1);
  }
 }

 console.log("response ", response);

 return response
};

findDisappearedNumbers([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]);
