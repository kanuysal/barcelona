import { ui, defaultLang } from './ui';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

/**
 * Generates a localized URL path
 * @param lang - Target language
 * @param url - Current URL object or pathname string
 */
export function getRelativeLocaleUrl(lang, url) {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  
  // If first part is a known locale, remove it
  if (parts[0] in ui) {
    parts.shift();
  }
  
  const base = parts.join('/');
  if (lang === defaultLang) {
    return `/${base}`;
  }
  return `/${lang}/${base}`;
}
