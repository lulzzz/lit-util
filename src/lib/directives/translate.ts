import { Directive, directive, NodePart } from "lit-html";
import { isPartConnected } from ".";
import { get, TranslateEvent, Values } from "../util/translate";

// Caches the parts and the translations.
const partCaches = new Map<NodePart, {key: string, values?: Values, listen: boolean}>();

// Listens for changes in the language and updates all of the cached parts if necessary
window.addEventListener(TranslateEvent.LANGUAGE_CHANGED, () => {
	for (const [part, {key, values, listen}] of partCaches) {
		if (listen && isPartConnected(part)) {
			handleTranslation(part, key, values);
			part.commit();
		}
	}
});

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
			partCaches.set(part, {key, values, listen});
			handleTranslation(part, key, values);
		});
