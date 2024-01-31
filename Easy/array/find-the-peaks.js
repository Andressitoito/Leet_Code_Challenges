/* You are given a 0-indexed array mountain. Your task is to find all the peaks in the mountain array.

Return an array that consists of indices of peaks in the given array in any order.

Notes:

A peak is defined as an element that is strictly greater than its neighboring elements.
The first and last elements of the array are not a peak. */
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
	const response = [];

	for (let i = 1; i < mountain.length - 1; i++) {
		const peak = mountain[i];
		const prev = mountain[i - 1];
		const next = mountain[i + 1];

		if (peak > prev && peak > next) {
			response.push(i);
		}
	}

	console.log("response ", response);

	return response;
};

findPeaks([1, 4, 3, 8, 5]);
