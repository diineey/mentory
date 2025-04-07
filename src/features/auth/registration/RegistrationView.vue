<script setup>
import RegistrationForm from '@/entities/auth/registration/RegistrationForm.vue';
import useRegistrationView from '@/features/auth/registration/useRegistrationView.js';

const {
  formData,
  formRules,
  errors,
  onSubmit,
  downloadMentyAgreement
} = useRegistrationView();
</script>

<template>
  <RegistrationForm
    v-model="formData"
    v-model:firstName="formData.firstName"
    v-model:lastName="formData.lastName"
    v-model:gender="formData.gender"
    v-model:dateOfBirth="formData.dateOfBirth"
    v-model:phoneNumber="formData.phoneNumber"
    :rules="formRules"
    :errors="errors"
    @handle-submit="onSubmit"
    @download-offer="downloadMentyAgreement"
  />
</template>
