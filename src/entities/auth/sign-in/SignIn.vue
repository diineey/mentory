<script setup>
import BaseCard from '@/shared/UI/BaseCard.vue';
import BaseFormItem from '@/shared/UI/BaseFormItem.vue';
import BaseInput from '@/shared/UI/BaseInput.vue';
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseForm from '@/shared/UI/BaseForm.vue';
import {
  SignInFormEmits,
  SignInFormProps,
} from '@/entities/auth/sign-in/sign-in.types';
import useSignIn from '@/entities/auth/sign-in/useSignIn';

const props = defineProps(SignInFormProps);
const emit = defineEmits(SignInFormEmits);

const {
  phone, handleSubmit, updateModelValue
} = useSignIn(props, emit);
</script>

<template>
  <main class="login-main">
    <BaseCard class="login-card">
      <div class="login-wrapper">
        <div class="login-text">
          <RouterLink
            class="menu active-link"
            to=""
          >
            Вход
          </RouterLink>

          <RouterLink
            class="menu inactive-link"
            to="sign-up"
          >
            Регистрация
          </RouterLink>
        </div>

        <BaseForm
          class="mt-3"
          no-prevent-route
          :model="props.modelValue"
          :rules="props.rules"
          @submit.prevent="handleSubmit"
        >
          <base-form-item
            label="Номер телефона"
            :error="props.errors.phone"
          >
            <BaseInput
              v-model="phone"
              placeholder="+998"
              is-phone
              :error="!!props.errors.phone"
              @input="updateModelValue('phone', $event.target.value)"
            />
          </base-form-item>

          <BaseButton
            class="login-card-button"
            variant="button-main"
            type="submit"
          >
            <template #text>
              Войти
            </template>
          </BaseButton>
        </BaseForm>
      </div>
    </BaseCard>
  </main>
</template>

<style>
.login-main {
  background-color: var(--color-background-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active-link {
  color: var(--color-text-blue);
}

.inactive-link {
  color: var(--color-text-main-grey);
}

.login-text {
  display: flex;
  justify-content: space-around;
}

.login-card {
  margin: 20px 0 100px 0;
}

.login-card-button {
  width: 45%;
  margin-left: auto;
}
</style>
