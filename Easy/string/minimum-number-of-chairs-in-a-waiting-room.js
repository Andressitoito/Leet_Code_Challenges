/* You are given a string s. Simulate events at each second i:

If s[i] == 'E', a person enters the waiting room and takes one of the chairs in it.
If s[i] == 'L', a person leaves the waiting room, freeing up a chair.
Return the minimum number of chairs needed so that a chair is available for every person who enters the waiting room given that it is initially empty. */
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
	console.log("s ", s);

	let E = 0;
	let L = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		console.log("char ", char);

		if (char === "E") {
			console.log("E ", E);

			E++;
		} else {
			L++;
		}
	}

	console.log("E L ", E, L);

	const response = E - L;

	console.log("response ", response);

	return response;
};

minimumChairs("ELEELEELLL");
