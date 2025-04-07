<script setup>
defineProps({
  label: String,
  required: {
    type: Boolean,
    default: false,
  },
  error: String,
});
</script>

<template>
  <div class="base-form-item">
    <label
      v-if="label"
      class="label input-title"
    >
      <span
        v-if="required"
        class="required-star"
      >*</span>
      {{ label }}
    </label>

    <slot />
    <span
      v-if="error"
      class="error-text text"
    >{{ error }}</span>
  </div>
</template>

<style scoped>
.base-form-item {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.label {
  max-width: 550px;
}

.required-star {
  color: var(--red);
}

.error-text {
  color: var(--red);
}
</style>
