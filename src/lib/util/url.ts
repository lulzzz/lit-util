import { URL_PATTERN } from "../constant/pattern";

/**
 * Returns whether the URL is valid.
 * @param url
 */
export function isValidURL (url: string): boolean {
	return URL_PATTERN.test(url);
}