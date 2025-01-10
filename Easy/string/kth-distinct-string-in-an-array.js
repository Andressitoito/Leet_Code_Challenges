/* A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array. */ /**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
	console.log(arr, k);

	const uniques = [];
	const repeated = [];

	for (let i = 0; i < arr.length; i++) {
		const str = arr[i];

		if (!uniques.includes(str)) {
			console.log("str ", str);

			uniques.push(str);
		} else {
			console.log("not unique  ", str);

			repeated.push(str);
		}
	}

	console.log("unique ", uniques);
	console.log("repeated ", repeated);

	const disctinct = [];

	for (let i = 0; i < arr.length; i++) {
		const str = arr[i];

		if (!repeated.includes(str)) {
			disctinct.push([str, i]);
		}
	}

	console.log("disctinct ", disctinct);

	const kth = disctinct.sort((a, b) => a[1] - b[1]);

	console.log("kth ", kth);

	const kthNum = [];

	for (let i = 0; i < kth.length; i++) {
		const str = kth[i];

		console.log("str ", str);

		kthNum.push(str[0]);
	}

	console.log("kthNum ", kthNum);


	if (kthNum.length < k) {
		console.log("kth response = ''", k)
	}

	const response = kthNum[k - 1]

	console.log("response ", response)

	return response
};

kthDistinct((arr = ["d", "b", "c", "b", "c", "a"]), (k = 2));
