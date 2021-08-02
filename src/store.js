import { readable } from 'svelte/store';
import { browserLang, traductions } from './i18n';

/**
 * store the translation data
 * @example
 * {
 * 		'about': 'A Propos',
 * 		'hello': 'Bonjour',
 * 		etc.
 * }
 */
export const trad = readable(null, function start(set) {
	set(traductions[browserLang]);
	return function stop() {};
});
