<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/shared/composables/header/MainHeader.vue'
import MainFooter from '@/shared/composables/footer/MainFooter.vue'
import MenuNavigation from '@/shared/composables/navigation/MenuNavigation.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseNotification from '@/shared/UI/BaseNotification.vue'

const route = useRoute()

const currentBackgroundColor = computed(() => {
  return route.meta.backgroundColor || 'var(--color-background-secondary)'
})
</script>

<template>
  <BaseNotification />
  <MainHeader/>

  <MenuNavigation :backgroundColor="currentBackgroundColor" />

  <RouterView />

  <MainFooter />

</template>
