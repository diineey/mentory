<script setup>
import moment from 'moment';
import { watch, ref } from 'vue';
import {
  allowOnlyLetters,
  allowOnlyLettersAndSpaces,
  allowOnlyNumbers,
} from '@/shared/utils/input-allows-rules.js';
import { FIELD_MASK } from '@/shared/constants/field-mask.js';
import { vMaska } from 'maska/vue';
import SearchIcon from '@/components/icons/search.svg';

const props = defineProps({
  placeholder: String,
  search: Boolean,
  isPhone: Boolean,
  isDate: Boolean,
  modelValue: String,
  allowInput: String,
  error: Boolean,
  required: Boolean,
  fluid: Boolean,
  rows: String,
  type: String,
  min: Date,
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue || '');
const isFocused = ref(false);
const isError = ref(props.error);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const isActive = () => {
  return inputValue.value.length > 0;
};

const handleDateInput = (event) => {
  let value = event.target.value;

  value = value.replace(/[^0-9.]/g, '');

  const isValidDate = moment(value, 'DD.MM.YYYY', true).isValid();

  inputValue.value = value;
  emit('update:modelValue', inputValue.value);
};

const handleInput = (event) => {
  if (props.isDate) {
    handleDateInput(event);
  }

  if (props.allowInput === 'numbers') {
    allowOnlyNumbers(event);
  } else if (props.allowInput === 'letters') {
    allowOnlyLetters(event);
  } else if (props.allowInput === 'lettersAndSpaces') {
    allowOnlyLettersAndSpaces(event);
  }

  inputValue.value = event.target.value;
  emit('update:modelValue', inputValue.value);

  if (inputValue.value.length > 0 && isError.value && props.required) {
    isError.value = false;
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue || '';
  }
);

watch(
  () => props.error,
  (newVal) => {
    isError.value = newVal;
  }
);
</script>

<template>
  <div class="input-container">
    <span v-if="search" class="search-icon">
      <SearchIcon
        :class="{
          'search-color': !isFocused,
          'search-color-active': isFocused || isActive(),
        }"
      />
    </span>

    <input
      v-if="isPhone"
      v-bind="$attrs"
      class="input"
      v-model="inputValue"
      v-maska="FIELD_MASK.phone"
      :class="{ 'input-with-icon': search, 'input-error': isError }"
      :style="{ width: fluid ? '100%' : '550px' }"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />

    <input
      v-if="isDate"
      v-bind="$attrs"
      class="input"
      v-model="inputValue"
      v-maska="FIELD_MASK.date"
      :class="{ 'input-with-icon': search, 'input-error': isError }"
      :style="{ width: fluid ? '100%' : '550px' }"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />

    <input
      v-if="type"
      v-bind="$attrs"
      class="input"
      v-model="inputValue"
      :class="{ 'input-with-icon': search, 'input-error': isError }"
      :style="{ width: fluid ? '100%' : '550px' }"
      :placeholder="placeholder"
      :type="type"
      :min="min"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />

    <input
      v-if="!isPhone && !isDate && !rows && !type"
      v-bind="$attrs"
      class="input"
      v-model="inputValue"
      :class="{ 'input-with-icon': search, 'input-error': isError }"
      :style="{ width: fluid ? '100%' : '550px' }"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />

    <textarea
      v-if="rows"
      v-bind="$attrs"
      class="input textarea"
      v-model="inputValue"
      :class="{ 'input-with-icon': search, 'input-error': isError }"
      :placeholder="placeholder"
      :rows="rows"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      :style="{ width: fluid ? '100%' : '550px' }"
    />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
}

.search-icon img {
  width: 24px;
  height: 24px;
}

.input {
  border-radius: 20px;
  border: 2px solid var(--color-input-hover);
  font-size: 18px;
  font-family: 'Gilroy-Medium', sans-serif;
  padding: 20px 20px 20px 12px;

  &:focus,
  &:active {
    border-color: var(--color-input-stroke);
    color: var(--color-text);
  }

  &::placeholder {
    color: var(--color-input-hover);
  }
}

.search-color {
  color: var(--color-input-hover);
}

.search-color-active {
  color: var(--color-text);
  transition: color 0.2s ease;
}

.input-with-icon {
  padding-left: 48px;
}

.textarea {
  outline: none;
  resize: none;
}

.input-error {
  border-color: var(--red);
  color: var(--red);

  &::placeholder {
    color: var(--red);
  }
}
</style>
