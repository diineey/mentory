<script setup>
import useLanguageSwitch from '@/shared/composables/languages-switch/useLanguageSwitch.js';
import formatCamelCase from '@/shared/utils/formatCamelCase.js';

const { currentLanguage, changeLanguage, languages } = useLanguageSwitch();
</script>

<template>
  <div class="lang-wrapper">
    <button
      v-for="lang in languages"
      class="language-button"
      :key="lang"
      :class="{ active: currentLanguage === lang }"
      @click="changeLanguage(lang)"
    >
      {{ formatCamelCase(lang) }}
    </button>
  </div>
</template>

<style scoped>
.lang-wrapper {
  font-family: 'Gilroy-Medium', sans-serif;
  display: flex;
  gap: 16px;
  align-items: center;
  transition: all 0.5s;
}

.language-button {
  font-family: 'Gilroy-Medium', sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  text-decoration: transparent;
}

.language-button:hover {
  font-family: 'Gilroy-Bold', sans-serif;
  text-decoration: underline;
  color: var(--color-active-language);
}

.language-button.active {
  font-family: 'Gilroy-Bold', sans-serif;
  text-decoration: underline;
  color: var(--color-active-language);
}
</style>
