import { html, LitElement, property } from "@polymer/lit-element";
import { addStringsToCache, customElement, get, getStringsFromCache, removeChildren, removeStringsFromCache, setStrings, translate } from "../../lib";
import { daStrings, enStrings } from "../mock";

const expect = chai.expect;

@customElement()
class MyComponent extends LitElement {

	@property() things = "";

	get title () {
		return this.shadowRoot.querySelector("h1").innerText;
	}

	get subtitle () {
		return this.shadowRoot.querySelector("p").innerText;
	}

	get awesome () {
		return this.shadowRoot.querySelector("span").innerText;
	}

	render () {
		return html`
			<h1>${translate("header.title")}</h1>
			<p>${translate("header.subtitle")}</p>
			<span>${translate("cta.awesome", {things: this.things})}</span>
		`;
	}
}

describe("directive/translate", () => {

	let $myComponent: MyComponent;

	beforeEach(() => {
		addStringsToCache("en", enStrings);
		addStringsToCache("da", daStrings);
		setStrings(getStringsFromCache("en"));

		$myComponent = document.createElement("my-component") as MyComponent;
		document.body.appendChild($myComponent);
	});
	after(() => {
		removeStringsFromCache("en");
		removeStringsFromCache("da");
		removeChildren(document.body);
	});

	it("[translate] - should translate and interpolate", async () => {
		$myComponent.things = get("cta.cats");
		await $myComponent.updateComplete;

		expect($myComponent.title).to.equal("Hello");
		expect($myComponent.subtitle).to.equal("World");
		expect($myComponent.awesome).to.equal("Cats are awesome!");
	});

	it("[translate] - should update translations when new strings are set", async () => {
		setStrings(daStrings);
		$myComponent.things = get("cta.cats");

		await $myComponent.updateComplete;

		expect($myComponent.title).to.equal("Hej");
		expect($myComponent.subtitle).to.equal("Verden");
		expect($myComponent.awesome).to.equal("Katte er for nice!");
	});
});
