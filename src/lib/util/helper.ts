/**
 * Turns a CamelCase text into a dash-case text.
 * @param text
 */
export function camelToDash (text) {
	return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

/**
 * Returns an array with unique items.
 * @param {*} arr
 */
export function uniqueArray (arr) {
	return arr.filter((item, i) => arr.indexOf(item) === i);
}

/**
 * Returns a value clamped in between a min and a max value (inclusive).
 * @param value
 * @param min
 * @param max
 */
export function clamp (value, min, max) {
	return Math.max(min, Math.min(value, max));
}

/**
 * Copies the array.
 */
export function copyArray (arr) {
	return [...arr];
}

/**
 * Waits a specifies amount of time.
 * @param ms
 */
export function wait (ms) {
	return new Promise(res => setTimeout(res, ms));
}
