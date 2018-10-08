import { Directive, directive, NodePart } from "lit-html";
import { addEventForNodePart } from ".";
import { get, TranslateEvent, Values } from "../util/translate";

// Caches the parts and the translations.
const partCaches = new WeakMap<NodePart, true>();

/**
 * Handles the translation.
 * @param part
 * @param key
 * @param values
 */
function handleTranslation (part: NodePart, key: string, values?: Values) {
	const translation = get(key, values);

	// Only set the value if the cache has changed
	if (part.value === translation) {
		return;
	}

	// Set the value of the new translation
	part.setValue(translation);
	partCaches.set(part, true);
}


/**
 * Directive that makes translations more efficient.
 * @param key
 * @param values
 * @param listen
 */
export const translate =
	(key: string, values?: Values, listen = true): Directive<NodePart> =>
		directive((part: NodePart) => {

			// Hook up an event listener for when the language changes
			if (listen && !partCaches.has(part)) {
				addEventForNodePart(TranslateEvent.LANGUAGE_CHANGED, window, part, () => {
					handleTranslation(part, key, values);
					part.commit();

				}, () => {
					partCaches.delete(part);

				}, {passive: true});
			}

			handleTranslation(part, key, values);
		});

// export const translatable = () =>
// 	(clazz: Constructor<HTMLElement>) => {
// 		window.addEventListener(TranslateEvent.LANGUAGE_CHANGED, function cb (e) {
//
// 			// Check whether the element is still connected / has been removed from the DOM.
// 			// If the element has been disconnected from the DOM, remove the event listener.
// 			if (!clazz.isConnected) {
// 				e.currentTarget.removeEventListener(event.type, cb);
// 				return;
// 			}
//
// 			//clazz.requestUpdate().then();
//
// 		}, {passive: true});
// 		return clazz as any;
// 	};


// export const onTranslate = () =>
// 	(proto: any, propName: string) => {
// 		window.addEventListener(TranslateEvent.LANGUAGE_CHANGED, function cb (e) {
//
// 			// Check whether the element is still connected / has been removed from the DOM.
// 			// If the element has been disconnected from the DOM, remove the event listener.
// 			// console.log(proto);
// 			// if (!proto.isConnected) {
// 			// 	e.currentTarget.removeEventListener(event.type, cb);
// 			// 	return;
// 			// }
//
// 			//proto[name](e);
//
// 		}, {passive: true});
// 	};