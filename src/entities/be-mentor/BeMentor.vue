<script setup lang="ts">
import BaseCard from '@/shared/UI/BaseCard.vue'
import BaseInput from '@/shared/UI/BaseInput.vue'
import BaseButton from '@/shared/UI/BaseButton.vue'
import BaseFormItem from '@/shared/UI/BaseFormItem.vue'
import BaseCheckbox from '@/shared/UI/BaseCheckbox.vue'
import BaseBreadcrumbs from '@/shared/UI/breadcrumbs/BaseBreadcrumbs.vue'
import { BeMentorProps, BeMentorEmits } from '@/entities/be-mentor/be-mentor.types.js'
import useBeMentor from '@/entities/be-mentor/useBeMentor.js'
import BaseForm from '@/shared/UI/BaseForm.vue'
import BaseSelect from '@/shared/UI/BaseSelect.vue'
import RemoveIcon from '@/components/icons/remove.svg?component'
import UploadIcon from '@/components/icons/upload.svg?component'

const props = defineProps(BeMentorProps)
const emit = defineEmits(BeMentorEmits)

const {
  isCustomCategorySelected,
  selectedLanguages,
  selectedCategories,
  customCategory,
  position,
  workplace,
  skills,
  linkedin,
  mentorRate,
  fileInput,
  fileName,
  handleFileChange,
  removeFile,
  triggerFileInput,
  onToggleChoice,
  handleSubmit,
  updateModelValue
} = useBeMentor(props, emit)
</script>

<template>
  <div class="be-mentor-center">
    <BaseBreadcrumbs class="mb-4" />
    <main class="be-mentor-main">
      <BaseCard class="mb-4">
        <h3 class="be-mentor-card-title">Ментороство - это</h3>
        <div class="be-mentor-card">
          <p class="text be-mentor-text">
            Путь к самопознанию и развитию. Ментор – это опытный проводник, который помогает вам раскрыть свой потенциал
            и
            достичь новых высот. Он делится своим опытом, знаниями и мудростью, чтобы вы могли избежать типичных ошибок
            и
            сделать правильный выбор.
          </p>

          <p class="be-mentor-text text">
            Взаимодействие, основанное на доверии и открытости. Ментор создает безопасное пространство для вас, чтобы вы
            могли задавать вопросы, делиться сомнениями и получать честную обратную связь.
          </p>

          <p class="be-mentor-text text">
            Не только обучение, но и вдохновение. Ментор – это не просто источник знаний, но и источник мотивации. Он
            помогает вам увидеть свои сильные стороны, поверить в себя и с уверенностью двигаться к своим целям.
          </p>

          <p class="be-mentor-text text">
            Инвестиции в будущее. Вкладывая время и энергию в менторство, вы не только развиваете себя, но и помогаете
            другим раскрыть свой потенциал.
          </p>

          <p class="be-mentor-text text">
            Более чем просто отношения, это партнерство в достижении успеха.
          </p>
        </div>
      </BaseCard>

      <BaseCard class="mb-10">
        <BaseForm
          class="be-mentor-form"
          no-prevent-route
          :model="props.modelValue"
          :rules="props.rules"
          @submit.prevent="handleSubmit"
        >
          <h3 class="mb-4">Данные о тебе</h3>

          <base-form-item
            label="Знание языков"
            :error="props.errors.language"
          >
            <div class="checkboxes">
              <BaseCheckbox
                label="Узбекский"
                v-model="selectedLanguages"
                value="UZB"
                @update:modelValue="updateModelValue('language', $event)"
              />

              <BaseCheckbox
                label="Русский"
                v-model="selectedLanguages"
                value="RUS"
                @update:modelValue="updateModelValue('language', $event)"
              />

              <BaseCheckbox
                label="Английский"
                v-model="selectedLanguages"
                value="ENG"
                @update:modelValue="updateModelValue('language', $event)"
              />
            </div>
          </base-form-item>

          <base-form-item
            label="Текущее место работы"
            :error="props.errors.workplace"
          >
            <BaseInput
              v-model="workplace"
              required
              placeholder="Meta, Amazon, Netflix, Google"
              :error="!!props.errors.workplace"
              @input="updateModelValue('workplace', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="Ваша текущая позиция"
            :error="props.errors.position"
          >
            <BaseInput
              v-model="position"
              required
              placeholder="Senior Backend Developer"
              :error="!!props.errors.position"
              @input="updateModelValue('position', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="Ваш текущий тариф"
            :error="props.errors.mentorRate"
          >
            <BaseSelect
              v-model="mentorRate"
              :options="props.rates"
              :error="!!props.errors.mentorRate"
              @input="updateModelValue('mentorRate', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="В какой категории вы специализируетесь?"
            :error="props.errors.categories"
          >
            <div class="be-mentor-categories">
              <BaseCheckbox
                v-for="category in props.categoriesList"
                v-model="selectedCategories"
                :key="category.id"
                :label="category.name"
                :value="category.name"
                @update:modelValue="updateModelValue('categories', $event)"
              />

              <BaseCheckbox
                value=""
                label="Ваш вариант"
                @click="onToggleChoice"
              />
            </div>
          </base-form-item>

          <base-form-item
            v-show="isCustomCategorySelected"
            label="Ваш вариант"
          >
            <BaseInput
              v-model="customCategory"
              placeholder=""
              @input="updateModelValue('categories', [...selectedCategories, $event.target.value])"
            />
          </base-form-item>

          <base-form-item
            label="Перечислите через запятую технологии и инструменты которыми вы владеете и можете обучить"
            :error="props.errors.skills"
          >
            <BaseInput
              v-model="skills"
              required
              placeholder="python, fastAPI, django, git, dockerr"
              :error="!!props.errors.skills"
              @input="updateModelValue('skills', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="Ссылка на LinkedIn профиль"
            :error="props.errors.linkedinOrCv"
          >
            <BaseInput
              v-model="linkedin"
              required
              :error="!!props.errors.linkedinOrCv"
              @input="updateModelValue('linkedin', $event.target.value)"
            />
          </base-form-item>

          <base-form-item
            label="Или загрузите файл с вашим резюме"
          >
            <div v-if="fileName" class="file-name">
              <p class="input-text">{{ fileName }}</p>

              <RemoveIcon @click="removeFile" class="file-remove-icon"/>

              <div class="success-upload text">Файл загружен</div>
            </div>

            <BaseButton
              class="be-mentor-button"
              variant="button-secondary"
              type="button"
              @click="triggerFileInput"
            >
              <template #text>
                Загрузить файл
              </template>
              <template #icon>
                <UploadIcon />
              </template>
            </BaseButton>

            <input
              type="file"
              ref="fileInput"
              style="display: none;"
              @change="handleFileChange"
            />
          </base-form-item>

          <BaseButton
            type="submit"
            class="mt-1 w-100"
            variant="button-main"
          >
            <template #text>
              Оставить заявку
            </template>
          </BaseButton>
        </BaseForm>
      </BaseCard>
    </main>
  </div>
</template>

<style scoped>
.be-mentor-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-secondary);
}

.be-mentor-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.be-mentor-card {
  display: grid;
  gap: 25px;
}

.be-mentor-text {
  text-align: center;
}

.be-mentor-card-title {
  margin-bottom: 10px;
}

.be-mentor-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkboxes {
  display: flex;
  gap: 32px;
  margin-top: 16px;
}

.be-mentor-button {
  margin-top: 16px;
  padding: 10px;
  width: 170px;
  font-size: 16px;
  font-family: 'Gilroy-Semibold', sans-serif;
}

.be-mentor-categories {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/*
.be-mentor-categories > *:nth-child(odd):last-child {
  grid-column: 2;
*/

.file-name {
  margin: 20px 0 4px 0;
  display: flex;
  gap: 10px;
  align-items: center;
}

.file-remove-icon {
  cursor: pointer;
}

.success-upload {
  margin-left: auto;
  color: var(--color-text-main-grey);
}
</style>
