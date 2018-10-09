import { html, LitElement } from "@polymer/lit-element";
import { customElement } from "../../lib";

const expect = chai.expect;

/**
 * Determines whether a custom element is defined.
 * @param elementName
 */
function isRegistered (elementName: string) {
	return document.createElement(elementName).constructor !== HTMLElement;
}

@customElement("test-component")
class TestComponent extends LitElement {
	render () {
		return html``;
	}
}

const componentNames = [
	"test-component"
];

describe("decorator/custom-element", () => {
	beforeEach(async () => {
		await Promise.all(componentNames.map(name => customElements.whenDefined(name)));
	});

	it("[@customElement] - should register components with the correct names", () => {
		for (const name of componentNames) {
			isRegistered(name);
		}
	});
});
