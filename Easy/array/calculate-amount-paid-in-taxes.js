/* You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti] means that the ith tax bracket has an upper bound of upperi and is taxed at a rate of percenti. The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).

Tax is calculated as follows:

The first upper0 dollars earned are taxed at a rate of percent0.
The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
And so on.
You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10-5 of the actual answer will be accepted. */
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
	console.log("bracket, income ", brackets, income);

	let last = 0;
	let remaining = income;
	let taxes = 0;

	for (let i = 0; i < brackets.length; i++) {
		console.log("/////////////////////////////////// ");
		const upper = brackets[i][0];
		const tax = brackets[i][1];

		console.log("upper ", upper);
		console.log("tax ", tax);
		const toTax = upper - last;

		if (remaining - toTax > 0) {
			console.log("to tax ======> ", toTax);
			remaining -= toTax;
			let applyTax = (toTax * tax) / 100;
			console.log("APPLY TAX                  => ", applyTax, taxes)
			taxes += applyTax;
			last = upper;
		} else {
			remaining;
			console.log("ENTer ELSE ------------------------------");

			let applyTax = (remaining * tax) / 100;
			console.log("APPLY TAX                  => ", applyTax, taxes)
			taxes += applyTax;
			console.log("remaining ", remaining, applyTax);

			console.log("to tax ======> ", toTax);

			break;
		}
	}

	console.log("taxes  ", taxes);

	return taxes;
};

calculateTax(
	[
		[3, 50],
		[7, 10],
		[12, 25],
	],
	10
);
