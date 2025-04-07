<script setup>
import TgIcon from '@/promo/assets/icons/tg.svg';

defineProps({
  color: {
    type: String,
    default: 'white'
  }
});
</script>

<template>
  <div class="button-wrapper">
    <a
      class="button-promo"
      href="https://t.me/mentory_uz_bot"
      target="_blank"
    >
      {{ $t('tg') }}
      <TgIcon />
    </a>

    <span
      class="border"
      :style="{ borderColor: color }"
    />
  </div>
</template>

<style scoped>
.button-wrapper {
  position: relative;
  width: fit-content;
  max-width: 500px;
}

.button-promo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  padding: 19px 16px;
  color: var(--white);
  background-color: var(--blue);
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  position: relative;
  z-index: 2;
  text-decoration: none;
  text-align: center;
}

.border {
  content: '';
  position: absolute;
  top: 6px;
  left: 12px;
  right: -10px;
  bottom: -10px;
  border-radius: 8px;
  border: 2px solid;
  pointer-events: none;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .button-promo {
    font-size: 12px;
    padding: 10px;
  }

  .button-promo img {
    width: 14px;
    height: 14px;
  }
}
</style>