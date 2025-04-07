<script setup>
import MentorDetails from '@/entities/mentor/MentorDetails.vue';
import BookForm from '@/entities/book-form/BookForm.vue';
import SuccessBookModal from '@/entities/success-book-modal/SuccessBookModal.vue';
import useMentorView from '@/features/mentor/useMentorView';

const {
  data,
  errors,
  formData,
  formRules,
  mentorPhoto,
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
      :mentor-photo="mentorPhoto"
      @scroll-to-booking-section="scrollToBookingSection"
    />

    <BookForm
      v-model="formData"
      :rules="formRules"
      :errors="errors"
      @handle-submit="onSubmit"
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
