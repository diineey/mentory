<script setup>
defineProps({
  variant: String,
});
</script>

<template>
  <button class="base-button" :class="['base-button', 'button', variant]">
    <template v-if="variant === 'button-no-fill-borders'">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </template>

    <template v-else>
      <slot name="text"></slot>
      <slot name="icon"></slot>
    </template>
  </button>
</template>

<style scoped>
.base-button {
  padding: 20px 16px;
  border-radius: 12px;
  display: flex;
  gap: 6px;
  justify-content: center;
  transition:
    opacity 0.3s,
    color 0.2s;
}

.base-button:hover {
  opacity: 0.8;
}

.button-main {
  color: var(--color-text-white);
  background-color: var(--color-button-main);
}

.button-secondary {
  color: var(--color-text-white);
  background-color: var(--color-button-secondary);
}

.button-no-fill {
  color: var(--color-text);
  background-color: var(--color-button-no-fill);
  justify-content: left;
  align-items: center;
  padding: 20px 0;
  width: fit-content;
}

.button-no-fill-borders {
  background-color: var(--color-button-no-fill);
  color: var(--color-text-blue);
  border: 2px solid var(--color-text-blue);
}

.button-no-fill:hover {
  color: var(--color-text-blue);
}
</style>
