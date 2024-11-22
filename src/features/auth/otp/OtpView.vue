<script setup>
import useOtpView from '@/features/auth/otp/useOtpView.js';
import ConfirmOtp from '@/entities/auth/otp/ConfirmOtp.vue';

const {
  formData,
  formRules,
  phone,
  errors,
  title,
  onSubmit,
  getOtpAgain
} = useOtpView();
</script>

<template>
  <ConfirmOtp
    v-model="formData"
    v-model:otp="formData.otp"
    :phone="phone"
    :title="title"
    :rules="formRules"
    :errors="errors"
    @handleSubmit="onSubmit"
    @getOtp="getOtpAgain"
  />
</template>
