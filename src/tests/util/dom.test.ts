import { removeChildren } from "../../lib/util/dom";

const expect = chai.expect;


describe("dom", () => {

	let $container: HTMLElement;

	before(() => {
	});
	after(() => {
	});
	beforeEach( () => {
		$container = document.createElement("div");
		let fragment = document.createDocumentFragment();
		for (let i = 0; i <= 1000; i++) {
			const $div = document.createElement("div");
			$div.innerText = `Item ${i}`;
			fragment.appendChild($div);
		}

		$container.appendChild(fragment);
	});
	it("[removeChildren] - should remove all children from the container", () => {
		removeChildren($container);
		expect($container.children.length).to.equal(0);
	});
});
