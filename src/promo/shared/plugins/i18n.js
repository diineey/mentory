import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import ru from '../locales/ru.json';
import uz from '../locales/uz.json';

function loadLocaleMessages() {
  return {
    en, ru, uz
  };
}

const savedLanguage = localStorage.getItem('language') || 'ru';

export default createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'ru',
  globalInjection: true,
  messages: loadLocaleMessages(),
});
