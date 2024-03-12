/* Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything. */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	console.log("arrr ", arr);

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];

		console.log("num ", num);

		if (num === 0) {
			arr.splice(i, 0, 0);
			i++;
			arr.pop();
		}
	}

	console.log("arr ", arr);
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
