import { removeChildren } from "../../lib/util/dom";

const expect = chai.expect;

const childrenCount = 1000;

describe("util/dom", () => {

	let $container: HTMLElement;

	beforeEach( () => {
		$container = document.createElement("div");
		let fragment = document.createDocumentFragment();
		for (let i = 0; i < childrenCount; i++) {
			const $div = document.createElement("div");
			$div.innerText = `Item ${i}`;
			fragment.appendChild($div);
		}

		$container.appendChild(fragment);
	});

	it("[removeChildren] - should remove all children from the container", () => {
		expect($container.children.length).to.equal(childrenCount);
		removeChildren($container);
		expect($container.children.length).to.equal(0);
	});
});
