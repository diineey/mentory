<script setup>
import {
  MentorFormEmits,
  MentorFormProps,
} from '@/entities/mentor-form/mentor-form.types.js';
import useMentorForm from '@/entities/mentor-form/useMentorForm.js';
import BaseForm from '@/shared/UI/BaseForm.vue';
import BaseInput from '@/shared/UI/BaseInput.vue';
import BaseFormItem from '@/shared/UI/BaseFormItem.vue';
import BaseCheckbox from '@/shared/UI/BaseCheckbox.vue';
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseModal from '@/shared/UI/BaseModal.vue';
import BaseSelect from '@/shared/UI/BaseSelect.vue';

const props = defineProps(MentorFormProps);
const emit = defineEmits(MentorFormEmits);

const {
  isCustomCategorySelected,
  localFormData,
  selectedLanguages,
  selectedMentorRate,
  selectedCategories,
  customCategory,
  fileInput,
  selectedImage,
  removeFile,
  triggerFileInput,
  handleFileChange,
  onToggleChoice,
  onCloseModal,
  updateModelValue,
  handleSubmit,
} = useMentorForm(props, emit);
</script>

<template>
  <BaseModal
    v-model="showModal"
    @closeModal="onCloseModal"
    @keydown.esc="onCloseModal"
    @update:modelValue="showModal = $event"
  >
    <div class="title-modal">
      <h3>Редактирование данных</h3>
    </div>

    <BaseForm
      class="h-100"
      no-prevent-route
      @submit.prevent="handleSubmit"
    >
      <base-form-item label="Имя">
        <BaseInput
          v-model="localFormData.firstname"
          placeholder="Напишите Ваше имя"
          allow-input="lettersAndSpaces"
          @input="updateModelValue('firstname', $event.target.value)"
        />
      </base-form-item>

      <base-form-item label="Фамилия">
        <BaseInput
          v-model="localFormData.lastname"
          allow-input="lettersAndSpaces"
          placeholder="Напишите Вашу фамилию"
          @input="updateModelValue('lastname', $event.target.value)"
        />
      </base-form-item>

      <!--			<base-form-item class="img-upload">-->
      <!--				<img-->
      <!--					v-if="selectedImage"-->
      <!--					:src="selectedImage"-->
      <!--					alt="Photo"-->
      <!--					class="img-upload-photo"-->
      <!--				/>-->
      <!--				-->
      <!--				<img-->
      <!--					v-else-->
      <!--					class="img-upload-photo"-->
      <!--					src="../../assets/images/card.jpg"-->
      <!--					alt="Photo"-->
      <!--				/>-->
      <!--				-->
      <!--				<div class="img-upload-buttons">-->
      <!--					<BaseButton-->
      <!--						class="img-upload-button"-->
      <!--						variant="button-secondary"-->
      <!--						type="button"-->
      <!--						@click="triggerFileInput"-->
      <!--					>-->
      <!--						<template #text>-->
      <!--							Изменить фотографию-->
      <!--						</template>-->
      <!--					</BaseButton>-->
      <!--					-->
      <!--					<BaseButton-->
      <!--						class="img-upload-button img-upload-button-red"-->
      <!--						variant="button-no-fill"-->
      <!--						type="button"-->
      <!--						@click="removeFile"-->
      <!--					>-->
      <!--						<template #text>-->
      <!--							Удалить фотографию-->
      <!--						</template>-->
      <!--					</BaseButton>-->
      <!--					-->
      <!--					<input-->
      <!--						type="file"-->
      <!--						ref="fileInput"-->
      <!--						style="display: none;"-->
      <!--						@change="handleFileChange"-->
      <!--					/>-->
      <!--				</div>-->
      <!--			</base-form-item>-->

      <base-form-item label="Текущее место работы">
        <BaseInput
          v-model="localFormData.currentWorkplace"
          placeholder="Meta, Amazon, Netflix, Google"
          @input="
            updateModelValue('currentWorkplace', $event.target.value)
          "
        />
      </base-form-item>

      <base-form-item label="Ваша текущая позиция">
        <BaseInput
          v-model="localFormData.position"
          placeholder="Senior Backend Developer"
          @input="updateModelValue('position', $event.target.value)"
        />
      </base-form-item>

      <base-form-item label="Лет опыта">
        <BaseInput
          v-model="localFormData.yearsOfExperience"
          allow-input="numbers"
          placeholder="2"
          maxlength="2"
          @input="
            updateModelValue('yearsOfExperience', $event.target.value)
          "
        />
      </base-form-item>

      <base-form-item label="Знание языков">
        <div class="modal-checkboxes">
          <BaseCheckbox
            label="Узбекский"
            v-model="selectedLanguages"
            value="UZB"
            @update:modelValue="updateModelValue('languages', $event)"
          />

          <BaseCheckbox
            label="Русский"
            v-model="selectedLanguages"
            value="RUS"
            @update:modelValue="updateModelValue('languages', $event)"
          />

          <BaseCheckbox
            label="Английский"
            v-model="selectedLanguages"
            value="ENG"
            @update:modelValue="updateModelValue('languages', $event)"
          />
        </div>
      </base-form-item>

      <base-form-item label="Ваш текущий тариф">
        <BaseSelect
          v-model="selectedMentorRate"
          :options="props.rates"
          @update:modelValue="updateModelValue('mentorRateId', $event)"
        />
      </base-form-item>

      <base-form-item label="О себе">
        <BaseInput
          v-model="localFormData.about"
          placeholder="Расскажите о себе"
          rows="25"
          @input="updateModelValue('about', $event.target.value)"
        />
      </base-form-item>

      <base-form-item label="С чем могу помочь">
        <BaseInput
          v-model="localFormData.canHelpWith"
          placeholder="Напишите о направлениях"
          rows="12"
          @input="updateModelValue('canHelpWith', $event.target.value)"
        />
      </base-form-item>

      <base-form-item label="В какой категории вы специализируетесь?">
        <div class="mentor-categories">
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
          @input="
            updateModelValue('categories', [
              ...selectedCategories,
              $event.target.value,
            ])
          "
        />
      </base-form-item>

      <base-form-item
        label="Перечислите через запятую технологии и инструменты которыми вы владеете и можете обучить"
      >
        <BaseInput
          v-model="localFormData.skills"
          placeholder="python, fastAPI, django, git, dockerr"
          @input="updateModelValue('skills', $event.target.value)"
        />
      </base-form-item>

      <BaseButton type="submit" class="mt-1 w-100" variant="button-main">
        <template #text> Сохранить </template>
      </BaseButton>
    </BaseForm>
  </BaseModal>
</template>

<style scoped>
.title-modal {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 40px;
}

.img-upload {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.img-upload-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.img-upload-photo {
  width: 208px;
  height: 154px;
}

.img-upload-button {
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 12px 10px;
}

.img-upload-button-red {
  color: var(--red);
}

.img-upload-button-red:hover {
  color: var(--red);
  opacity: 0.7;
}

.modal-checkboxes {
  display: flex;
  gap: 32px;
  margin-top: 16px;
}

.mentor-categories {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
