import { Constructor } from "@polymer/lit-element";

/**
 * Defines a custom element.
 * @param tagName
 */
export const customElement = (tagName: string) =>
	(clazz: Constructor<HTMLElement>) => {
		window.customElements.define(tagName, clazz);
		return clazz as any;
	};
