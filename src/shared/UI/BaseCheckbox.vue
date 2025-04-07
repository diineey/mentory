<script setup>
import {
  ref, watch, defineProps, defineEmits
} from 'vue';
import IconCheck from '@/components/icons/done.svg';

const props = defineProps({
  label: String,
  modelValue: {
    type: Array,
    default: () => [],
  },
  value: {
    type: String,
    required: true,
  },
  error: Boolean,
});

const emit = defineEmits([ 'update:modelValue', 'update:error' ]);

const isChecked = ref(props.modelValue.includes(props.value));

const hasError = ref(props.error);

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;

  const updatedValue = [ ...props.modelValue ];

  if (isChecked.value) {
    updatedValue.push(props.value);

    if (hasError.value) {
      hasError.value = false;
      emit('update:error', false);
    }
  } else {
    const index = updatedValue.indexOf(props.value);
    if (index !== -1) {
      updatedValue.splice(index, 1);
    }
  }

  emit('update:modelValue', updatedValue);
};

watch(
  () => props.error,
  (newError) => {
    hasError.value = newError;
  }
);

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = newValue.includes(props.value);
  }
);
</script>

<template>
  <div
    class="base-checkbox"
    @click="toggleCheckbox"
  >
    <span
      class="custom-checkbox"
      :class="{
        checked: isChecked,
        'checked-error': hasError
      }"
    >
      <IconCheck
        v-if="isChecked"
        class="icon"
      />
    </span>
    <label
      v-if="label"
      class="label input-text"
      :class="{
        'label-checked': isChecked,
        'label-error': hasError
      }"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
.base-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.label {
  cursor: pointer;
  color: var(--color-text-main-grey);
}

.custom-checkbox {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 2px solid var(--color-text-main-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.2s,
    border-color 0.2s;
}

.checked-error {
  border: 2px solid var(--red);
}

.custom-checkbox.checked {
  background-color: var(--color-text-blue);
  border-color: var(--color-text-blue);
  box-shadow: 0 0 7px 1px #0055ff40;
}

.label-checked {
  color: var(--color-text);
}

.label-error {
  color: var(--red) !important;
}

.icon {
  width: 18px;
  height: 18px;
}
</style>
