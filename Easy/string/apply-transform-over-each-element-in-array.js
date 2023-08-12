/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.
*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	let newArr = [];
	arr.forEach((element, index) => {
		return newArr.push(fn(element, index));
	});
	return newArr;
};

fn = function plusone(n) { return n + 1; }
fn = function plusI(n, i) { return n + i; }
fn = function constant() { return 42; }

map([1, 2, 3], fn);