import { isValidURL } from "../../lib/util/url";
import { invalidURLs, validURLs } from "../mock";

const expect = chai.expect;

// Data from https://mathiasbynens.be/demo/url-regex
describe("util/url", () => {
	it("[isValidURL] - should interpret valid URLs as valid", () => {
		for (const url of validURLs) {
			expect(isValidURL(url)).to.be.true;
		}
	});

	it("[isValidURL] - should interpret invalid URLs as invalid", () => {
		for (const url of invalidURLs) {
			expect(isValidURL(url)).to.be.false;
		}
	});
});
