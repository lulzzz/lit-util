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
