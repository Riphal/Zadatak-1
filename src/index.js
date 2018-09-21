const config = require('../src/config');
const functions = require('../src/functions');

// For random number
try {
	config.validateNumber(config.min, config.max);
	const rand = functions.random(config.min, config.max);
	console.log(`Random number is: ${rand}`);
} catch (error) {
	console.log('Error: Input must be a number!');
}

// For minIntegerFromArray
try {
	const min = functions.minIntegerFromArray(config.array);
	config.validateArray(min);
	console.log(`Min integer from array is: ${min}`);
} catch (error) {
	console.log('Error: Array don\'t have integer');
}

// For minIntegerFromString
try {
	const min = functions.minIntegerFromString(config.string);
	config.validateString(min);
	console.log(`Min integer from string is: ${min}`);
} catch (error) {
	console.log('Error: String don\'t have integer');
}

// For concatStringsByLength
try {
	config.validateType(config.type);
	const str = functions.concatStringsByLength(config.arrayOfStrings, config.type);
	console.log(`Type: ${config.type}, String: ${str}`);
} catch (error) {
	console.log('Error: Type can be only 0 or 1');
}
