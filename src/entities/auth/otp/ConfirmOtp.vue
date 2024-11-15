<script setup lang="ts">
import BaseFormItem from '@/shared/UI/BaseFormItem.vue';
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseCard from '@/shared/UI/BaseCard.vue';
import BaseForm from '@/shared/UI/BaseForm.vue';
import BaseInput from '@/shared/UI/BaseInput.vue';
import useOtpForm from '@/entities/auth/otp/useFormOtp.js';
import {
  OtpFormProps,
  OtpFormEmits,
} from '@/entities/auth/otp/confirm-otp.types';

const props = defineProps(OtpFormProps);
const emit = defineEmits(OtpFormEmits);

const { phoneNumber, otp, handleSubmit, updateModelValue } = useOtpForm(
  props,
  emit
);
</script>

<template>
  <main class="login-main">
    <BaseCard class="login-card">
      <div class="login-wrapper">
        <p class="menu center">{{ props.title }}</p>

        <p class="input-text login-confirmation-text">
          Мы выслали Вам код подтверждения, на номер телефона
          <br />
          {{ phoneNumber }}
        </p>

        <BaseForm
          no-prevent-route
          :model="props.modelValue"
          :rules="props.rules"
          @submit.prevent="handleSubmit"
        >
          <base-form-item label="ОТП-код" :error="props.errors.otp">
            <BaseInput
              v-model="otp"
              placeholder="Введите ОТП-код"
              allow-input="numbers"
              required
              :error="!!props.errors.otp"
              @input="updateModelValue('otp', $event.target.value)"
            />
          </base-form-item>

          <div class="login-buttons">
            <BaseButton variant="button-secondary">
              <template #text> Отправить заново </template>
            </BaseButton>

            <BaseButton type="submit" variant="button-main">
              <template #text> Войти </template>
            </BaseButton>
          </div>
        </BaseForm>
      </div>
    </BaseCard>
  </main>
</template>

<style scoped>
.login-main {
  background-color: var(--color-background-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-wrapper {
  width: 550px;
}

.login-confirmation-text {
  margin: 30px 0 20px 0;
  line-height: 21px;
}

.login-card {
  margin: 20px 0 100px 0;
}

.login-buttons {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;

  button {
    width: 50%;
  }
}
</style>
