<script setup>
import MentorDetails from '@/entities/mentor/MentorDetails.vue';
import BookForm from '@/entities/book-form/BookForm.vue';
import SuccessBookModal from '@/entities/success-book-modal/SuccessBookModal.vue';
import useMentorView from '@/features/mentor/useMentorView.js';

const {
  data,
  errors,
  formData,
  formRules,
  isSuccessModalActive,
  scrollToBookingSection,
  onSubmit,
  onCloseModal,
} = useMentorView();
</script>

<template>
  <main class="mentor-main">
    <MentorDetails
      :data="data"
      @scrollToBookingSection="scrollToBookingSection"
    />

    <BookForm
      v-model="formData"
      :rules="formRules"
      :errors="errors"
      @handleSubmit="onSubmit"
    />

    <SuccessBookModal
      :show-modal="isSuccessModalActive"
      @close-modal="onCloseModal"
    />
  </main>
</template>

<style scoped>
.mentor-main {
  margin: 0 60px;
}
</style>
