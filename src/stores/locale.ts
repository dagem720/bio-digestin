// stores/localeStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLocaleStore = defineStore('locale', () => {
  // Current locale (default: 'en')
  const currentLocale = ref('en');

  // Available locales
  const availableLocales = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
  ];

  // Set a new locale
  const setLocale = (localeCode: string) => {
    if (availableLocales.some((loc) => loc.code === localeCode)) {
      currentLocale.value = localeCode;
    }
  };

  return {
    currentLocale,
    availableLocales,
    setLocale,
  };
});
