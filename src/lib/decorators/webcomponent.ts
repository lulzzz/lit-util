import { Constructor } from "@polymer/lit-element";
import { camelToDash } from "..";

/**
 * Defines a custom element using the dash-cased name of the class or a custom tag name.
 * @param tagName
 */
export const customElement = (tagName?: string) =>
	(clazz: Constructor<HTMLElement>) => {
		window.customElements.define(tagName || camelToDash(clazz.name), clazz);
		return clazz as any;
	};
