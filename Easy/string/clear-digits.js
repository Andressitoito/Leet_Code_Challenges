/* You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits. */
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
 console.log("s", s);

 for (let i = 0; i < s.length; i++) {
  const char = s[i];

  console.log("char", char);

  const parsedNum = parseInt(char)

  if (!isNaN(parsedNum)) {
   console.log("not undefined ", char, parseInt(char));

   for (let j = i - 1; j >= 0; j--) {
    const char_del = s[j]

    console.log("char_del ", char_del)

    const parsedChar = parseInt(char_del)

    if (isNaN(parsedChar)) {
     console.log("not undefined ", char, parseInt(char));
    }

   };



  }
 }
};

clearDigits("cb34");
