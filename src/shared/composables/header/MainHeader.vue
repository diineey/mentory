<script setup>
import BaseButton from '@/shared/UI/BaseButton.vue';
import LanguagesSwitch from '@/shared/composables/languages-switch/LanguagesSwitch.vue';
import Arrow from '@/components/icons/arrow.svg';
import useMainHeader from '@/shared/composables/header/useMainHeader.js';
import UserIcon from '@/components/icons/user.svg';
import Logo from '@/assets/logo.svg';

const {
  user,
  router,
  isBeMentorPage,
  isAuthenticated,
  isMentor,
  onLogout,
  goToProfile,
  handleRoute,
} = useMainHeader();
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <router-link class="center" to="/">
        <Logo />
      </router-link>

      <div class="header-content">
        <LanguagesSwitch />

        <div class="buttons">
          <BaseButton
            v-if="!isBeMentorPage && !isMentor"
            variant="button-secondary"
            @click="handleRoute"
          >
            <template #text> Стать ментором </template>
          </BaseButton>

          <BaseButton
            v-if="isAuthenticated && user"
            variant="button-main"
            @click="isMentor ? goToProfile() : router.push('/')"
          >
            <template #text>
              {{ user.firstname || '' }}
            </template>
            <template #icon>
              <UserIcon />
            </template>
          </BaseButton>

          <BaseButton
            v-if="isAuthenticated && user"
            variant="button-secondary"
            @click="onLogout"
          >
            <template #text> Выход </template>
          </BaseButton>

          <BaseButton
            v-if="!isAuthenticated"
            variant="button-main"
            @click="router.push('/sign-in')"
          >
            <template #text> Вход </template>
            <template #icon>
              <Arrow />
            </template>
          </BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: var(--color-background);
}

.header-wrapper {
  padding: 18px 60px;
  display: flex;
  justify-content: space-between;
}

.header-content {
  display: flex;
  gap: 30px;
}

.buttons {
  display: flex;
  gap: 10px;
}
</style>
