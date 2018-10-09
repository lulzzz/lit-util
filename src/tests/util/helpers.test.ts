import { camelToDash, uniqueArray, clamp } from "../../lib/util/helpers";

const expect = chai.expect;

const words = [
	{
		camel: "HelloWorld",
		dash: "hello-world"
	},
	{
		camel: "THiSIsAwesome",
		dash: "t-hi-s-is-awesome"
	},
	{
		camel: "Example_Component",
		dash: "example_component"
	},
	{
		camel: "test",
		dash: "test"
	}
];

const arrays = [
	{
		arr: [1, 2, 3, 4, 4, 4],
		unique: [1, 2, 3, 4]
	},
	{
		arr: [10, 20, 20, 30, 10, 10, 20, 30, 40],
		unique: [10, 20, 30, 40]
	}
];

const values = [
	{
		value: 200,
		min: 100,
		max: 300,
		clamped: 200
	},
	{
		value: 12,
		min: 54,
		max: 100,
		clamped: 54
	},
	{
		value: 2991,
		min: 0,
		max: 2001,
		clamped: 2001
	},
	{
		value: -1023,
		min: -100,
		max: 100,
		clamped: -100
	},
	{
		value: 0,
		min: 0,
		max: 0,
		clamped: 0
	}
];

describe("helpers", () => {
	before(() => {
	});
	after(() => {
	});
	beforeEach( () => {
	});
	it("[camelToDash] - should turn camel case into dash case", () => {
		for (const word of words) {
			expect(camelToDash(word.camel)).to.equal(word.dash);
		}
	});

	it("[uniqueArray] - should make sure only unique elements exists in the array", () => {
		for (const a of arrays) {
			expect(uniqueArray(a.arr)).to.deep.equal(a.unique);
		}
	});

	it ("[clamp] - should clamp the value between a min and a max", () => {
		for (const v of values) {
			expect(clamp(v.value, v.min, v.max)).to.equal(v.clamped);
		}
	});
});
