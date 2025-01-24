/* You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings. */
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {

  console.log("satisfies ", s)

  const string = s.split('')

  const pairs = ["AB", "CD"]

  let keep = true

  let count = 0

  while (keep && count < 10) {

    console.log("count ", count)
    count++

    for (let i = 0; i < string.length; i++) {
      const silab = string[i] + string[i + 1]

      console.log("silab ", silab)

      if (pairs.includes(silab)) {
        console.log('\x1b[34m%s\x1b[0m \x1b[32m%s\x1b[0m', 'silab ----------->', silab);

        string.splice(i, i + 1)
        continue
      }

      keep = false

    };

    console.log("\x1b[35m%s\x1b[0m ", "Llego aca abajo")



  }


  console.log("string ", string, string.length)

  const response = string.length

  console.log("response ", response)

  return response

};


minLength("ABFCACDB")