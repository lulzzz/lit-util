import { hexToRGB, isHex } from "./colors";

const expect = chai.expect;

const validColors = [
	{
		hex: "#ffFfFF",
		rgb: {r: 255, g: 255, b: 255},
		contrast: "#000000"
	},
	{
		hex: "000000",
		rgb: {r: 0, g: 0, b: 0},
		contrast: "#FFFFFF"
	},
	{
		hex: "#8d6e63",
		rgb: {r: 141, g: 110, b: 99}
	},
	{
		hex: "#26a69a",
		rgb: {r: 38, g: 166, b: 154}
	},
	{
		hex: "#ff7676",
		rgb: {r: 255, g: 118, b: 118}
	},
	{
		hex: "#29b6f6",
		rgb: {r: 41, g: 182, b: 246}
	},
	{
		hex: "#f54ea280",
		rgb: {r: 245, g: 78, b: 162, a: 0.5}
	}
];

const invalidHex = [
	"26a69",
	"#26a69af",
	"asdoiajsd",
	"",
	"#fafafa800",
	"#0a0a0aABC",
	"#efbaba_"
];


describe("colors", () => {
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
		for (const hex of invalidHex) {
			expect(isHex(hex)).to.equal(false);
		}
	});
});
