<script setup>
import BaseButton from '@/shared/UI/BaseButton.vue';
import router from '@/router/index.js';
import ArrowType from '@/components/icons/arrow-long.svg';
</script>

<template>
  <div class="find-mentor mt-4">
    <h1 class="mb-6">
      Mentory - найди наставника и получи ответы на вопросы
    </h1>

    <BaseButton variant="button-main" @click="router.push('mentors')">
      <template #text> Посмотреть менторов </template>
      <template #icon>
        <ArrowType class="white" />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped>
.find-mentor {
  width: 100%;
  background-image: url('../../../assets/images/banner_main.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  border-radius: 40px;
  text-wrap: balance;
}
</style>
