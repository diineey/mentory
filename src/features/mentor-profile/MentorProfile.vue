<script setup>
import MentorDetails from '@/entities/mentor/MentorDetails.vue'
import MentorForm from '@/entities/mentor-form/MentorForm.vue'
import useMentorProfile from '@/features/mentor-profile/useMentorProfile.js'

const {
  data,
  formData,
  categoriesList,
  rates,
  isEditModalActive,
  onToggleEditModal,
  onSubmit
} = useMentorProfile();
</script>

<template>
  <main class="mentor-main">
    <MentorDetails
      :data="data"
      is-editable
      @handleOpenEditModal="onToggleEditModal"
    />

    <MentorForm
      v-model="formData"
      :showModal="isEditModalActive"
      :categoriesList="categoriesList"
      :rates="rates"
      :data="data"
      @onCloseModal="onToggleEditModal"
      @handleSubmit="onSubmit"
    />
  </main>
</template>

<style scoped>
.mentor-main {
  margin: 0 60px 100px 60px;
}
</style>