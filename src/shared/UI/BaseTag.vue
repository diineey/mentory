<script setup>
defineProps({
  text: String,
  variant: String,
  isClickable: Boolean,
});
</script>

<template>
  <div :class="['tag-wrapper', variant, { clickable: isClickable }]">
    <p class="tag">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.tag-wrapper {
  border-radius: 6px;
  padding: 0 20px;
  transition: all 0.5s;
}

.tag-wrapper.clickable {
  cursor: pointer;
}

.tag-primary {
  border: 1px solid var(--color-border);
  background: var(--color-background-secondary);
}

.tag-primary:hover {
  border-color: transparent;
  background-color: var(--color-background-blue);
  color: var(--color-text-white);
}

.tag-selected {
  border: 1px solid transparent;
  background-color: var(--color-background-blue);
  color: var(--color-text-white);
}

.tag-secondary {
  border: 1px solid var(--color-border-tertiary);
  background: var(--color-background-white);
}

.tag-tertiary {
  background: var(--color-background-tertiary-grey);
}
</style>
