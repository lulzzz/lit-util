import { camelToDash, uniqueArray, clamp } from "../../lib/util/helper";
import { camelWords, uniqueArrays, clampedValues } from "../mock";

const expect = chai.expect;


describe("util/helper", () => {
	it("[camelToDash] - should turn camel case into dash case", () => {
		for (const word of camelWords) {
			expect(camelToDash(word.camel)).to.equal(word.dash);
		}
	});

	it("[uniqueArray] - should make sure only unique elements exists in the array", () => {
		for (const a of uniqueArrays) {
			expect(uniqueArray(a.arr)).to.deep.equal(a.unique);
		}
	});

	it ("[clamp] - should clamp the value between a min and a max", () => {
		for (const v of clampedValues) {
			expect(clamp(v.value, v.min, v.max)).to.equal(v.clamped);
		}
	});
});
