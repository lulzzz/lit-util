import { NodePart } from "lit-html";

/**
 * Check whether the element is still connected / has been removed from the DOM.
 * @param part
 */
export function isPartConnected (part: NodePart) {
	return ((<HTMLElement>part.options.eventContext).isConnected);
}
