<script setup>
import useOtpView from '@/features/auth/otp/useOtpView';
import ConfirmOtp from '@/entities/auth/otp/ConfirmOtp.vue';

const {
  formData,
  formRules,
  phone,
  errors,
  title,
  buttonText,
  isButtonDisabled,
  onSubmit,
  handleResendClick
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
    :button-text="buttonText"
    :is-button-disabled="isButtonDisabled"
    @handle-submit="onSubmit"
    @handle-resend-click="handleResendClick"
  />
</template>
