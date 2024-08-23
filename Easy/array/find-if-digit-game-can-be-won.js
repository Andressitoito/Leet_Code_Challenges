/* You are given an array of positive integers nums.

Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

Return true if Alice can win this game, otherwise, return false. */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
 let double = 0;
 let single = 0;

 for (let i = 0; i < nums.length; i++) {
  const num = nums[i];

  if (num < 10 && num > 0) {
   single += num;
  } else {
   double += num;
  }
 }

 if (single > double || double > single) {
  console.log("response ", true)
  return true;
 } else {
  console.log("response ", false)
  return false;
 }
};

canAliceWin([1, 2, 3, 4, 10]);
canAliceWin([1, 2, 3, 4, 5, 14])
canAliceWin([5, 5, 5, 25])