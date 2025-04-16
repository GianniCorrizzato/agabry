import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['it', 'en', 'de', 'fr', 'pt' ,'es', 'ru', 'jp', 'pl'],
 
  // Used when no locale matches
  defaultLocale: 'it'
});