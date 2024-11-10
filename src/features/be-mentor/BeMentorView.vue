<script setup lang="ts">
import BeMentor from '@/entities/be-mentor/BeMentor.vue'
import useBeMentorView from './useBeMentorView';

const {
  categoriesList,
  rates,
  formData,
  formRules,
  errors,
  onSubmit
} = useBeMentorView()
</script>

<template>
  <BeMentor
    v-model="formData"
    v-model:skills="formData.skills"
    v-model:categories="formData.categories"
    v-model:workplace="formData.workplace"
    v-model:position="formData.position"
    v-model:language="formData.language"
    v-model:mentor-rate="formData.mentorRate"
    v-model:linkedin="formData.linkedin"
    v-model:cv="formData.cv"
    :categories-list="categoriesList"
    :rates="rates"
    :errors="errors"
    :rules="formRules"
    @handleSubmit="onSubmit"
  />
</template>

