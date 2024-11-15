<script setup>
import BaseFormItem from '@/shared/UI/BaseFormItem.vue';
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseCard from '@/shared/UI/BaseCard.vue';
import BaseForm from '@/shared/UI/BaseForm.vue';
import BaseInput from '@/shared/UI/BaseInput.vue';
import BaseRadioButton from '@/shared/UI/BaseRadioButton.vue';
import {
  RegistrationFormEmits,
  RegistrationFormProps,
} from '@/entities/auth/registration/registration-form.types.js';
import useRegistrationForm from '@/entities/auth/registration/useRegistrationForm.js';

const props = defineProps(RegistrationFormProps);
const emit = defineEmits(RegistrationFormEmits);

const {
  firstName,
  lastName,
  phoneNumber,
  dateOfBirth,
  gender,
  handleSubmit,
  updateModelValue,
} = useRegistrationForm(props, emit);
</script>

<template>
  <main class="login-main">
    <BaseCard class="login-card">
      <div class="login-wrapper">
        <div class="login-text">
          <RouterLink class="menu inactive-link" to="sign-in"
            >Вход</RouterLink
          >

          <RouterLink class="menu active-link" to="sign-up"
            >Регистрация</RouterLink
          >
        </div>

        <BaseForm
          class="registration-form"
          no-prevent-route
          :model="props.modelValue"
          :rules="props.rules"
          @submit.prevent="handleSubmit"
        >
          <base-form-item
            required
            label="Номер телефона"
            :error="props.errors.phoneNumber"
          >
            <BaseInput
              v-model="phoneNumber"
              placeholder="+998"
              is-phone
              required
              :error="!!props.errors.phoneNumber"
              @input="updateModelValue('phoneNumber', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            required
            label="Имя"
            :error="props.errors.firstName"
          >
            <BaseInput
              v-model="firstName"
              placeholder="Введите Ваше имя"
              allow-input="letters"
              required
              :error="!!props.errors.firstName"
              @input="updateModelValue('firstName', $event.target.value)"
            />
          </base-form-item>

          <base-form-item label="Фамилия">
            <BaseInput
              v-model="lastName"
              placeholder="Введите Вашу фамилию"
              allow-input="letters"
              @input="updateModelValue('lastName', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="Дата рождения"
            :error="props.errors.dateOfBirth"
          >
            <BaseInput
              v-model="dateOfBirth"
              is-date
              placeholder="Введите Вашу дату рождения"
              :error="!!props.errors.dateOfBirth"
              @input="updateModelValue('dateOfBirth', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="Пол"
            required
            :error="props.errors.gender"
          >
            <div class="radio-buttons">
              <BaseRadioButton
                label="Мужчина"
                v-model="gender"
                name="gender"
                value="MALE"
                @input="updateModelValue('gender', $event.target.value)"
              />

              <BaseRadioButton
                label="Женщина"
                v-model="gender"
                name="gender"
                value="FEMALE"
                @input="updateModelValue('gender', $event.target.value)"
              />
            </div>
          </base-form-item>

          <BaseButton type="submit" class="w-100" variant="button-main">
            <template #text> Регистрация </template>
          </BaseButton>
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

.registration-form {
  margin: 30px 0 40px 0;
}

.radio-buttons {
  display: flex;
  gap: 32px;
  margin-top: 16px;
}
</style>
