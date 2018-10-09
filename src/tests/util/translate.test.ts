const expect = chai.expect;

import { addStringsToCache, get, getStringsFromCache, removeStringsFromCache, setStrings } from "../../lib/util/translate";
import { daStrings, enStrings } from "../mock";

describe("util/translate", () => {
	beforeEach(() => {
		addStringsToCache("en", enStrings);
		addStringsToCache("da", daStrings);
		setStrings(getStringsFromCache("en"));
	});
	after(() => {
		removeStringsFromCache("en");
		removeStringsFromCache("da");
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
		expect(get("cta.awesome", {things: get("cta.cats")})).to.equal("Cats are awesome!");

		setStrings(getStringsFromCache("da"));
		expect(get("cta.awesome", {things: get("cta.cats")})).to.equal("Katte er for nice!");
	});
});
