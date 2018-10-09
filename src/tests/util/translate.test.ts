const expect = chai.expect;

import { addStringsToCache, get, getStringsFromCache, removeStringsFromCache, setStrings } from "../../lib/util/translate";

const enStrings = {
	"lang": "en",
	"header": {
		"title": "Hello",
		"subtitle": "World"
	},
	"cta": {
		"awesome": "{{ things }} are awesome!"
	}
};

const daStrings = {
	"lang": "da",
	"header": {
		"title": "Hej",
		"subtitle": "Verden"
	},
	"cta": {
		"awesome": "{{ things }} er for nice!"
	}
};

describe("translate", () => {
	before(() => {
	});
	after(() => {
		removeStringsFromCache("en");
		removeStringsFromCache("da");
	});
	beforeEach( () => {
		addStringsToCache("en", enStrings);
		addStringsToCache("da", daStrings);
		setStrings(getStringsFromCache("en"));
	});

	it("[get] - should translate keys based on the current language", () => {

		// English
		expect(get("lang")).to.equal("en");
		expect(get("header.title")).to.equal("Hello");
		expect(get("header.subtitle")).to.equal("World");

		// Danish
		setStrings(getStringsFromCache("da"));
		expect(get("lang")).to.equal("da");
		expect(get("header.title")).to.equal("Hej");
		expect(get("header.subtitle")).to.equal("Verden");
	});

	it("[get] - should show empty placeholder if string does not exist", () => {
		expect(get("this.does.not.exist")).to.equal("[this.does.not.exist]");
		expect(get("this.does.not.exist", null, key => `{{ ${key} }}`)).to.equal("{{ this.does.not.exist }}");
	});

	it("[get] - should interpolate values correctly", () => {
		expect(get("cta.awesome", { things: "Cats" })).to.equal("Cats are awesome!");

		setStrings(getStringsFromCache("da"));
		expect(get("cta.awesome", { things: "Katte" })).to.equal("Katte er for nice!");
	});
});
