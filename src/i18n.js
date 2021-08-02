// i18n.js --> Internationalisation & localisation file
import * as fr from './locales/fr.json';
import * as en from './locales/en.json';

// get the browser language
let userLang = navigator.language || navigator.userLanguage;
if (userLang.length > 2) {
	userLang = userLang.substring(0, 2).toLowerCase();
}
if (!['fr', 'en'].includes(userLang)) {
	userLang = 'en'; // default language
}

export const browserLang = userLang;
export const traductions = { fr, en };
