import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const fallbackLng = ["en"];
const availableLanguages = ["en", "ko", "chi"];
const options = {
  // order and from where user language should be detected
  order: ["navigator", "htmlTag", "path", "subdomain"],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",
  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
  // only detect languages that are in the whitelist
  checkWhitelist: true,
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: true,
    detection: options,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
