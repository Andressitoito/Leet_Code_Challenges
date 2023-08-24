/* Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.

If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.

If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time. */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
	const validEmails = new Set();

	for (let i = 0; i < emails.length; i++) {
		const email = emails[i].split("@");

		const local = email[0];
		let new_local = "";

		for (let j = 0; j < local.length; j++) {
			if (local[j] === "+") {
				break;
			} else if (local[j] === ".") {
				continue;
			} else {
				new_local += local[j];
			}
		}

		validEmails.add(`${new_local}@${email[1]}`);
	}

	const unique = validEmails.size;
	console.log(unique);

	return unique;
};

numUniqueEmails([
	"test.email+alex@leetcode.com",
	"test.e.mail+bob.cathy@leetcode.com",
	"testemail+david@lee.tcode.com",
]);
