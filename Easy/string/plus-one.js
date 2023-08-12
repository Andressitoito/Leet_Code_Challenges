/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	return loopArr(digits);
};

function loopArr(arr, i, arrLoop, plus, last) {
	arrLoop = arrLoop ?? [];
	i = i ?? 0;
	j = arr.length - 1 - i;
	let maxLength = arr.length;
	plus = plus ?? false;
	last = last ?? true;

	if (arr[arr.length - 1] + 1 !== 10) {
		arr[arr.length - 1] = arr[arr.length - 1] + 1;
		console.log(arr);
		return arr;
	}

	if (i === maxLength) {
		let check = arrLoop.every((num) => num === 0);
		if (check) {
			arrLoop.push(1);
		}
		console.log(arrLoop.reverse());
		return arrLoop;
	}

	if (arr[j] + 1 === 10 && last === true) {
		arrLoop.push(0);
		plus = true;
		return loopArr(arr, i + 1, arrLoop, plus, last);
	}

	if (plus && last === true) {
		plus = false;
		arrLoop.push(arr[j] + 1);
		last = false;
		return loopArr(arr, i + 1, arrLoop, plus, last);
	}

	arrLoop.push(arr[j]);

	return loopArr(arr, i + 1, arrLoop, plus, last);
}

// plusOne([7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6]);
// plusOne([5, 5, 4, 3]);
// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
// plusOne([3, 9, 0, 1, 9]);
// plusOne([9, 9, 9]);
// plusOne([9, 8, 9]);
// plusOne([9]);
// plusOne([8, 9, 9, 9]);
// plusOne([9, 2, 3, 4, 4, 5, 5, 3, 3, 3, 3, 1, 2]);

//////////////////////////////////
// loopArr WITH ALL CONSOLE LOGS

// function loopArr(arr, i, arrLoop, plus, last) {
// 	arrLoop = arrLoop ?? [];
// 	console.log("arrLoop ", arrLoop);
// 	i = i ?? 0;
// 	console.log("VALUE OF i: ", i);
// 	j = arr.length - 1 - i;
// 	let maxLength = arr.length;
// 	console.log("MAX LENGTH : ", maxLength);
// 	plus = plus ?? false;
// 	last = last ?? true;
// 	console.log("PLUS VALUE : ", plus);
// 	console.log("LAST VALUE : ", last);
// 	console.log("j value INIT LOOP", j);
// 	console.log("----------------- VALUE  ", arr[arr.length - 1 - i]);

// 	if (arr[arr.length - 1] + 1 !== 10) {
// 		arr[arr.length - 1] = arr[arr.length - 1] + 1;
// 		console.log(arr);
// 		return arr;
// 	}

// 	if (i === maxLength) {
// 		console.log("END OF ARRAY LOOP");
// 		console.log(arrLoop);
// 		let check = arrLoop.every((num) => num === 0);
// 		console.log(check);
// 		if (check) {
// 			console.log("CHECK TRUE");
// 			arrLoop.push(1);
// 		}
// 		console.log(arrLoop.reverse());
// 		return arrLoop;
// 	}

// 	if (arr[j] + 1 === 10 && last === true) {
// 		console.log("Last sum 10");
// 		arrLoop.push(0);
// 		plus = true;
// 		return loopArr(arr, i + 1, arrLoop, plus, last);
// 	}

// 	console.log("SUM 10 PASS    TO...");

// 	if (plus && last === true) {
// 		console.log("PLUS VALUE : ", plus);
// 		console.log("LAST VALUE : ", last);
// 		plus = false;
// 		console.log("NEW value to push", arr[j] + 1);
// 		arrLoop.push(arr[j] + 1);
// 		last = false;
// 		return loopArr(arr, i + 1, arrLoop, plus, last);
// 	}

// 	arrLoop.push(arr[j]);

// 	return loopArr(arr, i + 1, arrLoop, plus, last);
// }

// loopArr([1, 2, 3]);

//////////////////////////////////

// for (let i = digits.length - 1; i >= 0; i--) {
//  const element = digits[i];
//  console.log("VALUE i: ", i);
//  console.log("VALUE digits.length - 1", digits.length - 1);

//  console.log("raw element", element);

//  if (i === digits.length - 1 && digits[i] + 1 === 10) {
//   console.log("THE LAST ELEMENT");
//   newArr.push(0);
//   plus = 1;
//   continue;
//  }

//  if (i === 0 && digits[i] + 1 === 10) {
//   console.log("Sum last 10");
//   newArr.push(0);
//   newArr.push(1);
//   continue;
//  }

//  if (digits[i] + 1 === 10) {
//   console.log("Sum is 10");
//   newArr.push(0);
//   continue;
//  }

//  if (i === 0 && digits[i] + 1 !== 10) {
//   newArr.push(element + 1);
//  }
// }

// let newArr = [];
// let plus = 0;
// let last = digits.length - 1;

// if (digits.length === 1 && digits[0] === 9) {
//  console.log([1, 0]);
//  return [1, 0];
// }

// if (digits[last] + 1 !== 10) {
//  digits[last] = digits[last] + 1;
//  console.log(digits);
//  return digits;
// }

// // try with some, index of, and push 10 at the end

// console.log(newArr.reverse());
// return newArr;

//////////////////////////////////

// let newArr = [];
// let plus = 0;
// let last = digits.length;
// console.log("last ", last);

// for (let i = digits.length - 1; i >= 0; i--) {
//  const element = digits[i];

//  console.log("element in the beginng of loop", element);

//  if (i === last - 1 && element + 1 !== 10) {
//   console.log('ELEMENT DIFF OF 10')
//   newArr.push(element + 1);
//   continue;
//  }

//  if (i === last - 1 && digits[last - 1] + 1 === 10) {
//   console.log("last - 1", last - 1)
//   console.log("element ", element);
//   plus = 1;
//   newArr.push(0);
//   if (digits[i] === digits[0] && plus === 1) {
//    console.log('ultimo')
//    newArr.push(1)
//   }
//   continue;
//  } else if (plus === 1) {
//   plus = 0;
//   newArr.push(element + 1);
//  } else {
//   newArr.push(element);
//  }
// }
// console.log(newArr);
// return newArr.reverse()
