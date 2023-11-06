/* Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.

Return the number of good triplets. */
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		const num_i = arr[i];

		for (let j = i + 1; j < arr.length; j++) {
			const num_j = arr[j];

			for (let k = j + 1; k < arr.length; k++) {
				const num_k = arr[k];

				const A = Math.abs(num_i - num_j);
				const B = Math.abs(num_j - num_k);
				const C = Math.abs(num_i - num_k);

				if (A <= a && B <= b && C <= c) {
					count++;
				}
			}
		}
	}

	console.log(count);

	return count;
};

countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3);
