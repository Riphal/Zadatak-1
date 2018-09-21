const rand = require('math-random');

function random(min, max) {
	return Math.floor(rand() * (max + 1 - min) + min);
}

function minIntegerFromArray(array) {
	let min = Number.MAX_SAFE_INTEGER;
	let flag = true;

	array.forEach((element) => {
		if (!isNaN(element)) {
			flag = false;
			if (min > element) {
				min = element;
			}
		}
	});

	if (flag) {
		return false;
	}
	return min;
}

function minIntegerFromString(string) {
	let min = Number.MAX_SAFE_INTEGER;
	// "/\d+/" matches a number only if it is not followed by a decimal point.
	const numbers = string.match(/\d+/g);

	if (numbers.length === 0) {
		return false;
	}
	numbers.forEach((element) => {
		if (min > element) {
			min = element;
		}
	});
	return min;
}

function insertonSort(array) {
	for (let i = 1; i < array.length; i += 1) {
		const valueNumb = array[i].length;
		const valueStr = array[i];
		let j;
		for (j = i - 1; j > -1 && array[j].length > valueNumb; j -= 1) {
			array[j + 1] = array[j];
		}
		array[j + 1] = valueStr;
	}
	return array;
}

function concatStringsByLength(arrayOfStrings, type) {
	let newString = '';
	const newArrayOfStrings = arrayOfStrings;
	insertonSort(newArrayOfStrings);
	if (type === 0) {
		newArrayOfStrings.forEach((element) => {
			newString += element;
		});
	} else if (type === 1) {
		for (let i = newArrayOfStrings.length - 1; i > -1; i -= 1) {
			newString += newArrayOfStrings[i];
		}
	}
	return newString;
}

module.exports = {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength,
};
