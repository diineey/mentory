<script setup>
import useSignInView from '@/features/auth/sign-in/useSignInView.js'
import SignIn from '@/entities/auth/sign-in/SignIn.vue'

const {
  formData,
  formRules,
  errors,
  onSubmit
} = useSignInView()
</script>

<template>
  <SignIn
    v-model="formData"
    v-model:phone="formData.phone"
    :rules="formRules"
    :errors="errors"
    @handleSubmit="onSubmit"
  />
</template>