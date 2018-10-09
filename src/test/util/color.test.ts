import { contrastColor, hexToRGB, isHex } from "../../lib/util/color";
import { validColors, invalidHexes } from "../mock";

const expect = chai.expect;


describe("util/color", () => {
	it("[hexToRGB] - should parse all valid hex correctly",  () => {
		for (const color of validColors) {
			expect(hexToRGB(color.hex)).to.deep.equal(color.rgb);
		}
	});

	it("[isHex] - should validate all valid hex correctly",  () => {
		for (const color of validColors) {
			expect(isHex(color.hex)).to.equal(true);
		}
	});

	it("[isHex] - should invalidate all invalid hex correctly",  () => {
		for (const hex of invalidHexes) {
			expect(isHex(hex)).to.equal(false);
		}
	});

	it("[contrastColor] - should find the correct contrast to the color",  () => {
		for (const color of validColors) {
			expect(contrastColor(color.hex)).to.equal(color.contrast);
			expect(contrastColor(color.rgb)).to.equal(color.contrast);
		}
	});
});
