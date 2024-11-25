/* You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string. */
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
 console.log("num ", num);

 let response = 0;

 for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j <= num.length; j++) {
   const substring = parseInt(num.slice(i, j));
   console.log("substring ", substring);

   if (substring % 2 === 1) {
    console.log("\x1b[36mOdd: \x1b[0m", substring);

    if (substring > response) {
     console.log("\x1b[32mBigger: ----->   \x1b[0m", substring);

     response = substring;
    }
   }
  }
 }

 response = response.toString()

 console.log("\x1b[35mresponse \x1b[0m", response)

 return response
};

largestOddNumber("35427");
