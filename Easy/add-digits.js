// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
 if (num.toString().length <= 1) {
  console.log('Num 1 digit')
  console.log('Number is ', num)
  return num
 }

 if (typeof num !== NaN) {
  num = num.toString()
  console.log(num)
 }

 console.log(num.toString().length)

 console.log('Tpye', typeof num)

 num = num.split('').reduce((acc, elem) => {
  console.log(acc)
  return acc += parseInt(elem)
 }, 0)

 console.log(num)

 return addDigits(num)


};

addDigits(384976544)


function sumNumToString(num) {


 if (num.toString().length <= 1) {
  console.log('Num 1 digit')
  console.log('Number is ', num)
  return num
 }

 if (typeof num !== NaN) {
  num = num.toString()
  console.log(num)
 }

 console.log(num.toString().length)

 console.log('Tpye', typeof num)

 num = num.split('').reduce((acc, elem) => {
  console.log(acc)
  return acc += parseInt(elem)
 }, 0)

 console.log(num)

 return sumNumToString(num)

}

// sumNumToString(38)