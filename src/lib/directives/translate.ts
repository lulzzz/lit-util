import { Directive, directive, NodePart } from "lit-html";
import { get, TranslateEvent, Values } from "../util/translate";

// Caches the parts and the translations.
const partCaches = new WeakMap<NodePart, true>();

/**
 * Directive that makes translations more efficient.
 * @param key
 * @param values
 * @param listen
 */
export const translate =
	(key: string, values?: Values, listen = true): Directive<NodePart> =>
		directive((part: NodePart) => {

			// console.log((<any>part.options.eventContext).disconnectedCallback);

			// Handles the translation
			function handleTranslation () {
				const translation = get(key, values);

				// Only set the value if the cache has changed
				if (part.value === translation) {
					return;
				}

				// Set the value of the new translation
				part.setValue(translation);
				partCaches.set(part, true);
			}

			// Hook up an event listener for when the language changes
			// TODO: How can we unhook this event when the part is removed from the DOM.
			if (!partCaches.has(part) && listen) {
				window.addEventListener(TranslateEvent.LANGUAGE_CHANGED, () => {
					handleTranslation();
					part.commit();
				}, {passive: true, capture: true});
			}

			handleTranslation();
		});
