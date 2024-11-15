<script setup>
import BaseModal from '@/shared/UI/BaseModal.vue';
import SuccessIcon from '@/components/icons/success-modal.svg';
import useSuccessBookModal from '@/entities/success-book-modal/useSuccessBookModal.js';
import {
  SuccessBookModalEmits,
  SuccessBookModalProps,
} from '@/entities/success-book-modal/succes-modal-book.types.js';
import BaseButton from '@/shared/UI/BaseButton.vue';

const props = defineProps(SuccessBookModalProps);
const emit = defineEmits(SuccessBookModalEmits);

const { onCloseModal } = useSuccessBookModal(props, emit);
</script>

<template>
  <BaseModal
    v-model="showModal"
    width="517px"
    padding="48px"
    right="30px"
    top="30px"
    @closeModal="onCloseModal"
    @keydown.esc="onCloseModal"
    @update:modelValue="showModal = $event"
  >
    <div class="book-modal">
      <SuccessIcon />

      <p class="title">Заявка принята</p>

      <p class="input-text">Свяжемся с вами в ближайшее время</p>

      <BaseButton
        variant="button-secondary"
        class="w-100"
        @click="onCloseModal"
      >
        <template #text> Ок </template>
      </BaseButton>
    </div>
  </BaseModal>
</template>

<style scoped>
.book-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
</style>
