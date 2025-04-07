import { useLanguageStore } from '@/stores/languageStore.js';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default function useLanguageSwitch() {
  const languageStore = useLanguageStore();
  const { locale } = useI18n();

  const languages = [ 'uz', 'ru', 'en' ];
  const currentLanguage = computed(() => languageStore.currentLanguage);

  const changeLanguage = (lang) => {
    locale.value = lang;
    languageStore.setLanguage(lang);
  };

  return {
    languages,
    currentLanguage,
    changeLanguage,
  };
}
