/* You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false. */
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
	const mid = s.length / 2;

	const half_a = s.split("").splice(0, mid).join("");
	const half_b = s.split("").splice(mid).reverse().join("");

	const qty_a = countVowels(half_a);
	const qty_b = countVowels(half_b);

	if (qty_a === qty_b) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
};

halvesAreAlike("boilliok");

function countVowels(str) {
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

	let count = 0;

	for (let i = 0; i < str.length; i++) {
		const found = vowels.find((v) => v === str[i]);

		if (found) {
			count++;
		}
	}

	return count;
}
