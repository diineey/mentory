<script setup>
import IconCheck from '@/components/icons/done.svg?url';
import { defineProps, ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  isChecked: Boolean
});

const emit = defineEmits(['downloadOffer', 'toggleOffer']);

const handleChange = () => emit('toggleOffer');

const downloadOffer = () => emit('downloadOffer');
</script>

<template>
  <div class="offer-wrapper">
    <div class="base-radio">
      <input
        class="base-radio-input"
        type="checkbox"
        :checked="isChecked"
      />
      
      <span class="custom-offer-radio" @click="handleChange">
        <img :src="IconCheck" alt="Done" class="icon-check">
      </span>
      
      <span class="input-text base-radio-label" @click="downloadOffer">
      Принять
        <span class="offer-link">
          {{ label }}
        </span>
    </span>
    </div>
  </div>

</template>

<style scoped>
.offer-wrapper {
  padding: 16px 20px;
  background-color: var(--color-background-secondary);
  border-radius: 10px;
  margin-bottom: 30px;
}

.offer-link {
  color: var(--color-text-blue);
}

.base-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.base-radio-input {
  display: none;
}

.custom-offer-radio {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-text-main-grey);
  border-radius: 4px;
  margin-right: 8px;
  transition: border-color 0.2s;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.base-radio-input:checked + .custom-offer-radio {
  border-color: var(--color-text-blue);
  background-color: var(--color-text-blue);
}

.icon-check {
  height: 13px;
  width: 13px;
  display: block;
}
</style>