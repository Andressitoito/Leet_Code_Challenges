/* Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array. */
/**
	* @param {number[]} nums
	* @return {number[]}
	*/
var frequencySort = function (nums) {
	nums.sort((a, b) => a - b);
	const frequency = [];
	const frequencies = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		const inFreq = frequency.find((number) => number[0] === num);

		if (!inFreq) {
			frequency.push([num, 1]);
		} else {
			const index = frequency.findIndex((number) => number[0] === num);
			frequency[index][1]++;
		}
	}
	frequency.sort((a, b) => a[1] - b[1]);

	for (let i = 0; i < frequency.length; i++) {
		const freq = frequency[i][1];

		if (!frequencies.includes(freq)) {
			frequencies.push(freq);
		}
	}

	const groups = [];

	for (let i = 0; i < frequencies.length; i++) {
		const freq = frequencies[i];
		const group = [];
		for (let j = 0; j < frequency.length; j++) {
			const freq_data = frequency[j];

			if (freq_data[1] === freq) {
				group.push(freq_data);
			}
		}

		group.sort((a, b) => b[0] - a[0]);
		groups.push(...group);
	}

	const response = [];

	for (let i = 0; i < groups.length; i++) {
		const group = groups[i];
		const num_array = Array(group[1]).fill(group[0]);
		response.push(...num_array);
	}

	console.log("response ", response)

	return response;
};

frequencySort([-1, 1, -6, 4, 4, 5, -6, 1, 4, 1]);
