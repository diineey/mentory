<script setup>
import { ref, watch } from 'vue';
import CloseIcon from '@/components/icons/close.svg';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  width: String,
  padding: String,
  right: String,
  top: String,
});

const emit = defineEmits([ 'closeModal' ]);

const isModalOpen = ref(props.modelValue);

const closeModal = () => {
  emit('closeModal');
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

watch(
  () => props.modelValue,
  (newVal) => {
    isModalOpen.value = newVal;
    if (newVal) {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEscapeKey);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    v-if="isModalOpen"
    class="modal-overlay"
  >
    <div
      class="modal-content"
      :style="{ width: width, padding: padding }"
    >
      <div class="modal-body">
        <CloseIcon
          class="close-icon"
          :style="{ right: right, top: top }"
          @click="closeModal"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.modal-content {
  position: relative;
  background: var(--white);
  width: 892px;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 92vh;
  overflow-y: auto;
  scrollbar-width: none;
}

.modal-content::-webkit-scrollbar {
  display: none;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-icon {
  position: absolute;
  right: 50px;
  top: 40px;
  cursor: pointer;
}
</style>
