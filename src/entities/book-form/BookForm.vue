<script setup>
import BaseCheckbox from '@/shared/UI/BaseCheckbox.vue';
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseFormItem from '@/shared/UI/BaseFormItem.vue';
import BaseForm from '@/shared/UI/BaseForm.vue';
import BaseInput from '@/shared/UI/BaseInput.vue';
import ArrowIcon from '@/components/icons/arrow.svg';
import {
  BookFormEmits,
  BookFormProps,
} from '@/entities/book-form/book-form.types.js';
import useBookForm from '@/entities/book-form/useBookForm.js';

const props = defineProps(BookFormProps);
const emit = defineEmits(BookFormEmits);

const { localFormData, todayDate, submitHandler, updateModelValue } =
  useBookForm(props, emit);
</script>

<template>
  <div class="mentor-book-wrapper" id="book-form-section">
    <div class="mentor-book-container">
      <div class="book-section">
        <p class="menu mb-3">Забронировать встречу с ментором</p>

        <BaseForm
          no-prevent-route
          :model="props.modelValue"
          :rules="props.rules"
          @submit.prevent="submitHandler"
        >
          <base-form-item label="Тема" :error="props.errors.title">
            <BaseInput
              v-model="localFormData.title"
              fluid
              placeholder="Укажите тему для беседы"
              required
              :error="!!props.errors.title"
              @input="updateModelValue('title', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            class="w-100"
            label="Сообщение"
            :error="props.errors.agenda"
          >
            <BaseInput
              v-model="localFormData.agenda"
              class="w-100"
              fluid
              required
              rows="8"
              placeholder="Дайте краткое описание темы беседы"
              :error="!!props.errors.agenda"
              @input="updateModelValue('agenda', $event.target.value)"
            />
          </base-form-item>

          <p class="menu mb-3">Выберите дату и время</p>

          <div class="date-and-time">
            <base-form-item
              label="Дата"
              :error="props.errors.date"
              class="input-50"
            >
              <BaseInput
                type="date"
                v-model="localFormData.date"
                class="input-50"
                placeholder="Выберите удобную дату"
                :error="!!props.errors.date"
                :min="todayDate()"
                @input="updateModelValue('date', $event.target.value)"
              />
            </base-form-item>

            <base-form-item
              label="Время"
              :error="props.errors.time"
              class="input-50"
            >
              <BaseInput
                type="time"
                v-model="localFormData.time"
                placeholder="Укажите удобное для вас время"
                :error="!!props.errors.time"
                @input="updateModelValue('time', $event.target.value)"
              />
            </base-form-item>
          </div>

          <base-form-item>
            <BaseCheckbox
              v-model="localFormData.hasToPay"
              label="Обязуюсь оплатить ментору за сессию"
              :error="!!props.errors.hasToPay"
              value="checked"
              @update:modelValue="updateModelValue('hasToPay', $event)"
            />
          </base-form-item>

          <BaseButton
            class="w-100 mt-3"
            variant="button-main"
            type="submit"
          >
            <template #text> Запросить консультацию </template>
            <template #icon>
              <ArrowIcon />
            </template>
          </BaseButton>
        </BaseForm>
      </div>

      <div class="book-img">
        <img src="@/assets/images/feedback.png" alt="Book" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mentor-book-wrapper {
  background: var(--color-background-secondary);
  margin: 40px 0 100px 0;
  border-radius: 20px;
}

.mentor-book-container {
  display: flex;
  justify-content: space-between;
}

.book-section {
  padding: 40px 30px;
}

.book-img {
  border-radius: 0 20px 20px 0;
}

.book-img img {
  width: 523px;
  height: 100%;
}

.date-and-time {
  display: flex;
  gap: 20px;
}

.input-50 {
  width: 358px;
}

.experience {
  display: flex;
  justify-content: space-between;
}
</style>
