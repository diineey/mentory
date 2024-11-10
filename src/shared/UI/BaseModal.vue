<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const isModalOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  isModalOpen.value = newVal
  if (newVal) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
})
</script>

<template>
  <div v-if="isModalOpen" class="modal-overlay">
    <div class="modal-content" @click.stop>
      <div class="modal-body">
        <slot>
        </slot>
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
</style>

