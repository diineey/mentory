import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref(localStorage.getItem('language') || 'ru');

  function setLanguage(lang) {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
  }

  return {
    currentLanguage,
    setLanguage,
  };
});
