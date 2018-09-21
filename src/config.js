// for random function
const min = 1;
const max = 2;

function validateNumber(_min, _max) {
	if (isNaN(_min) || isNaN(_max)) {
		throw new Error();
	}
}

// for minIntegerFromArray function
const array = [1, 'etf', 'kgj', 4, 0, 2];

function validateArray(bool) {
	if (bool === false) {
		throw new Error();
	}
}

// for  minIntegerFromString function
const string = 'Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra';

function validateString(bool) {
	if (bool === false) {
		throw new Error();
	}
}

// for concatStringsByLength function
const arrayOfStrings = ['abc', 'ac', 'bdca', 'edagas'];
const type = 0;

function validateType(_type) {
	if (!(_type === 1 || _type === 0)) {
		throw new Error();
	}
}

module.exports = {
	min,
	max,
	array,
	string,
	arrayOfStrings,
	type,
	validateNumber,
	validateArray,
	validateString,
	validateType,
};
