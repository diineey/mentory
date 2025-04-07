<script setup>
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';
import IconCheck from '@/components/icons/done.svg';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits([ 'update:modelValue' ]);

const isChecked = computed(() => props.modelValue === props.value);

const handleChange = () => {
  emit('update:modelValue', props.value);
};
</script>

<template>
  <label class="base-radio">
    <input
      class="base-radio-input"
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="handleChange"
    >

    <span class="custom-radio">
      <IconCheck class="icon-check" />
    </span>

    <span class="input-text base-radio-label">
      {{ label }}
    </span>
  </label>
</template>

<style scoped>
.base-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.base-radio-input {
  display: none;
}

.custom-radio {
  width: 28px;
  height: 28px;
  border: 2px solid var(--color-text-main-grey);
  border-radius: 8px;
  margin-right: 12px;
  transition: border-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.base-radio-input:checked + .custom-radio {
  border-color: var(--color-text-blue);
  background-color: var(--color-text-blue);
}

.base-radio-input:checked + .custom-radio + .base-radio-label {
  color: var(--color-text);
}

.base-radio-label {
  color: var(--color-text-main-grey);
}

.icon-check {
  height: 18px;
  width: 18px;
  display: block;
}

.active-label {
  color: var(--color-text);
}
</style>
