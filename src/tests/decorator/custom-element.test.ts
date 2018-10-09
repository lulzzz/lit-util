import { html, LitElement, property } from "@polymer/lit-element";
import { addStringsToCache, customElement, get, getStringsFromCache, removeChildren, removeStringsFromCache, setStrings, translate } from "../../lib";
import { daStrings, enStrings } from "../mock";

const expect = chai.expect;

/**
 * Determines whether a custom element is defined.
 * @param elementName
 */
function isRegistered (elementName: string) {
	return document.createElement(elementName).constructor !== HTMLElement;
}

@customElement()
class TestComponent extends LitElement {
	render () {
		return html``;
	}
}

@customElement("this-is-a-custom-name")
class TestComponentTwo extends LitElement {
	render () {
		return html``;
	}
}

@customElement()
class TestCOmPoNenT extends HTMLElement {
}

const componentNames = [
	"test-component",
	"this-is-a-custom-name",
	"test-c-om-po-nen-t"
];

describe("decorator/custom-element", () => {
	beforeEach(async () => {
		await Promise.all(componentNames.map(name => customElements.whenDefined(name)));
	});

	it("[@customElement] - should register components with the correct names",  () => {
		for (const name of componentNames) {
			isRegistered(name);
		}
	});
});
