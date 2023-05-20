import CN from "./cn";
import EN from "./en";
import TW from "./tw";
import ES from "./es";
import IT from "./it";
import TR from "./tr";
import JP from "./jp";
import DE from "./de";
import VI from "./vi";
import RU from "./ru";
<<<<<<< HEAD
import NO from "./no";
=======
import CS from "./cs";
>>>>>>> c4210be (Czech language update)

export type { LocaleType, RequiredLocaleType } from "./cn";

export const AllLangs = [
  "en",
  "cn",
  "tw",
  "es",
  "it",
  "tr",
  "jp",
  "de",
  "vi",
  "ru",
<<<<<<< HEAD
  "no",
=======
  "cs",
>>>>>>> c4210be (Czech language update)
] as const;
export type Lang = (typeof AllLangs)[number];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  cn: "简体中文",
  en: "English",
  tw: "繁體中文",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  tr: "Türkçe",
  jp: "日本語",
  de: "Deutsch",
  vi: "Tiếng Việt",
  ru: "Русский",
  cs: "Čeština",
  ko: "한국어",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    console.log("[Lang] failed to detect user lang.");
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }

  return DEFAULT_LANG;
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}

export default {
  en: EN,
  cn: CN,
  tw: TW,
  es: ES,
  it: IT,
  tr: TR,
  jp: JP,
  de: DE,
  vi: VI,
  ru: RU,
<<<<<<< HEAD
  no: NO,
=======
  cs: CS,
>>>>>>> c4210be (Czech language update)
}[getLang()] as typeof CN;
