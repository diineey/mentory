<script setup>
import MentorDetails from '@/entities/mentor/MentorDetails.vue';
import MentorForm from '@/entities/mentor-form/MentorForm.vue';
import useMentorProfile from '@/features/mentor-profile/useMentorProfile.js';

const {
  data,
  formData,
  categoriesList,
  rates,
  mentorPhoto,
  isEditModalActive,
  isSubmitting,
  onToggleEditModal,
  onSubmit,
  deletePhoto
} = useMentorProfile();
</script>

<template>
  <main class="mentor-main">
    <MentorDetails
      :data="data"
      :mentor-photo="mentorPhoto"
      is-editable
      @handle-open-edit-modal="onToggleEditModal"
    />

    <MentorForm
      v-model="formData"
      :show-modal="isEditModalActive"
      :categories-list="categoriesList"
      :rates="rates"
      :data="data"
      :mentor-photo="mentorPhoto"
      :is-loading="isSubmitting"
      @on-close-modal="onToggleEditModal"
      @handle-submit="onSubmit"
      @delete-photo="deletePhoto"
    />
  </main>
</template>

<style scoped>
.mentor-main {
  margin: 0 60px 100px 60px;
}
</style>
