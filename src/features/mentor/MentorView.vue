<script setup>
import MentorDetails from '@/entities/mentor/MentorDetails.vue'
import useMentorView from '@/features/mentor/useMentorView.js'
import BookForm from '@/entities/book-form/BookForm.vue'

const {
  data,
  errors,
  formData,
  formRules,
  scrollToBookingSection,
  onSubmit
} = useMentorView()
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
  </main>
</template>

<style scoped>
.mentor-main {
  margin: 0 60px;
}
</style>