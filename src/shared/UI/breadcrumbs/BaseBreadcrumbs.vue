<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ArrowType from '@/components/icons/arrow-long.svg'

const route = useRoute();

const currentPageTitle = computed(() => {
  return route.meta.title || null;
});
</script>

<template>
  <nav class="breadcrumbs">
    <router-link class="tag" to="/">Главная</router-link>

    <ArrowType />

    <span
      v-if="currentPageTitle"
      class="tag"
    >
      {{ currentPageTitle }}
    </span>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-background-secondary);
}

.breadcrumbs span {
  color: var(--color-text-blue);
}
</style>
