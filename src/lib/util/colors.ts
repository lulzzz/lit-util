export type RGB = {r: number, g: number, b: number, a?: number};

/**
 * Converts a hex number into rgb.
 * @param hex
 */
export function hexToRGB (hex: string): RGB | null {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
	if (result == null) return null;

	const [, rHex, gHex, bHex, alpha] = result;
	const radix = 16;

	const rgb: RGB = {
		r: parseInt(rHex, radix),
		g: parseInt(gHex, radix),
		b: parseInt(bHex, radix)
	};

	// Take alpha into account
	if (alpha != null) {
		rgb.a = Math.round((parseInt(alpha, radix) / 255) * 100) / 100;
	}

	return rgb;
}

/**
 * Determines whether the string is a valid hexdecimal or not.
 * @param hex
 */
export function isHex (hex: string): boolean {
	return /^#?(([a-f\d]{6})([a-f\d]{2})?|[a-f\d]{3})$/i.test(hex);
}

/**
 * Computes the contrast color (either black or white)
 * @param color
 */
export function contrastColor (color: string | RGB): string {

	// Check whether the color is a hex.
	if (typeof color === "string") {
		color = hexToRGB(color);
	}

	const yiq = ((color.r * 299) + (color.g * 587) + (color.b * 114)) / 1000;
	return (yiq >= 140) ? "#000000" : "#FFFFFF";
}