/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote. */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let response = true;
	const ransomNoteObj = {};
	const magazineObj = {};

	for (let i = 0; i < ransomNote.length; i++) {
		const char = ransomNote[i];

		if (ransomNoteObj[char]) {
			ransomNoteObj[char] = ransomNoteObj[char] + 1;
		} else {
			ransomNoteObj[char] = 1;
		}
	}

	for (let i = 0; i < magazine.length; i++) {
		const char = magazine[i];

		if (magazineObj[char]) {
			magazineObj[char] = magazineObj[char] + 1;
		} else {
			magazineObj[char] = 1;
		}
	}

	for (const char in ransomNoteObj) {
		console.log("//////////////////////// ");
		console.log("magazineObj char    --- ", char, magazineObj[char]);
		console.log("ransomNoteObj char  --- ", char, ransomNoteObj[char]);

		if (magazineObj[char]) {
			if (magazineObj[char] < ransomNoteObj[char]) {
				console.log("\x1b[46m cannot be done \x1b[0m", false);
    response = false
    break
			}
		} else {
			console.log("\x1b[46m cannot be done \x1b[0m", false);
			response = false;
   break
		}
	}

	console.log("response", response);

	return response;
};

canConstruct("aaaarr", "baaaarrr");
