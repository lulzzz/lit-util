import { NodePart } from "lit-html";

/**
 * Adds an event for a node part.
 * In the ideal world, the event would be removed when the parent was disconnected, but sadly we cant listen for when the node is removed from the DOM.
 * This is the next best thing: When the event fires we do some housekeeping and makes sure to remove it.
 * @param eventName
 * @param target
 * @param part
 * @param handleEvent
 * @param onDisconnected
 * @param options
 */
export function addEventForNodePart (eventName: string,
                                     target: EventTarget,
                                     part: NodePart,
                                     handleEvent: ((e: Event) => void),
                                     onDisconnected: ((e: Event) => void),
                                     options?: AddEventListenerOptions) {
	target.addEventListener(eventName, function cb (e) {

		// Check whether the element is still connected / has been removed from the DOM.
		// If the element has been disconnected from the DOM, remove the event listener.
		const isConnected = ((<HTMLElement>part.options.eventContext).isConnected);
		// e.currentTarget.removeEventListener(event.type, cb);
		if (!isConnected) {
			target.removeEventListener(eventName, cb);
			onDisconnected(e);
			return;
		}

		handleEvent(e);

	}, options);
}
