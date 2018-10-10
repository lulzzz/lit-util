export * from "./keycode";

/**
 * An empty src to use when no media src can be provided
 * @type {string}
 */
export const EMPTY_SRC = "//:0";

/**
 * Is true if the user agent is a mobile device
 * @type {boolean}
 */
export const IS_MOBILE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent);

/**
 * Is true if the user is browsing from an iOS device
 * @type {boolean}
 */
export const IS_IOS_DEVICE = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
