<script setup>
const props = defineProps({
  variant: String,
  disabled: Boolean
});
</script>

<template>
  <button
    class="base-button"
    :class="[
      'base-button',
      'button',
      props.variant,
      { 'button-disabled': props.disabled }
    ]"
    :disabled="props.disabled"
  >
    <template v-if="props.variant === 'button-no-fill-borders'">
      <slot name="icon" />
      <slot name="text" />
    </template>

    <template v-else>
      <slot name="text" />
      <slot name="icon" />
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

.button-disabled {
  background-color: var(--color-button-hovered);
  color: var(--color-input-hover);
}
</style>
