<script setup></script>

<template>
  <div class="base-card center">
    <div class="base-card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.base-card {
  width: 892px;
  padding: 40px;
  border-radius: 20px;
  background-color: var(--color-background-white);
}

.base-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
