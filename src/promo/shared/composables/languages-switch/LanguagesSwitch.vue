<script setup>
import useLanguageSwitch from '@/shared/composables/languages-switch/useLanguageSwitch';
import formatCamelCase from '@/shared/utils/formatCamelCase';

const {
  currentLanguage,
  changeLanguage,
  languages
} = useLanguageSwitch();
</script>

<template>
  <div
    class="lang-wrapper-promo"
    ы
  >
    <button
      v-for="lang in languages"
      :key="lang"
      class="language-button-promo"
      :class="{ active: currentLanguage === lang }"
      @click="changeLanguage(lang)"
    >
      {{ formatCamelCase(lang) }}
    </button>
  </div>
</template>

<style scoped>
.lang-wrapper-promo {
  display: flex;
  gap: 16px;
  align-items: center;
}

.language-button-promo {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
}

.language-button-promo.active {
  text-decoration: underline;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}

@media screen and (max-width: 768px) {
  .language-button-promo {
    font-size: 20px;
    line-height: 28px;
  }

  .language-button-promo.active {
    font-size: 20px;
    line-height: 24px;
  }

  .lang-wrapper-promo {
    gap: 30px;
  }
}
</style>
