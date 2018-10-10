import { html, LitElement, property } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
import { customElement, testDec } from "../../lib";

const styles = require("./demo-page.scss").toString();

/**
 * Demo page.
 */
@customElement("demo-page-component")
export class DemoPageComponent extends LitElement {

	@testDec() helloWorld = "1234";
	@property() lang = "en";


	disconnectedCallback () {
		super.disconnectedCallback();
	}

	protected render (): TemplateResult {
		return html`
<style>
	${styles}
</style>
<p>TODO: Add demo</p>

`;
	}
}
