<template>
  <div class="skeleton-tag" />
</template>

<style scoped>
.skeleton-tag {
  background: #e0e0e0;
  height: 21px;
  width: 100px;
  border-radius: 6px;
  padding: 0 20px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
