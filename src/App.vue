<script setup>
import { RouterView } from 'vue-router';
import MainHeader from '@/shared/composables/header/MainHeader.vue';
import MainFooter from '@/shared/composables/footer/MainFooter.vue';
import MenuNavigation from '@/shared/composables/navigation/MenuNavigation.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseNotification from '@/shared/UI/BaseNotification.vue';
import 'swiper/css';
import { register } from 'swiper/element/bundle';

register();

const route = useRoute();

const currentBackgroundColor = computed(() => {
  return route.meta.backgroundColor || 'var(--color-background-secondary)';
});

const isPromoRoute = computed(() => route.path === '/promo' || route.path === '/promo/');
</script>

<template>
  <BaseNotification />

  <MainHeader v-if="!isPromoRoute" />

  <MenuNavigation
    v-if="!isPromoRoute"
    :background-color="currentBackgroundColor"
  />

  <RouterView />

  <MainFooter v-if="!isPromoRoute" />
</template>
