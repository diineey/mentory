<script setup>
import Arrow from '@/components/icons/arrow-down.svg';
import {
  ref, watch
} from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: [ String, Number ],
    default: '',
  },
  error: Boolean,
});

const emit = defineEmits([ 'update:modelValue' ]);

const selectedValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newId) => {
    selectedValue.value = newId;
  }
);

watch(selectedValue, (newId) => {
  emit('update:modelValue', newId);
});
</script>

<template>
  <div class="select-container">
    <select
      v-model="selectedValue"
      class="select"
      :class="{ 'select-error': error }"
    >
      <!--			<option disabled value="">Выберите тариф</option>-->
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.name }} - {{ option.costPerHour }}
      </option>
    </select>
    <Arrow
      class="select-arrow"
      :class="{ 'select-arrow-error': error }"
    />
  </div>
</template>

<style scoped>
.select-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.select {
  border-radius: 20px;
  border: 2px solid var(--color-input-hover);
  font-size: 18px;
  font-family: 'Gilroy-Medium', sans-serif;
  padding: 20px 20px 20px 12px;
  width: 100%;
  appearance: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus,
  &:active {
    border-color: var(--color-input-stroke);
    color: var(--color-text);
  }
}

.select-arrow {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}

.select-error {
  border-color: var(--red) !important;
  color: var(--red);

  &::placeholder {
    color: var(--red);
  }
}

.select-arrow-error {
  color: var(--red);
}
</style>
