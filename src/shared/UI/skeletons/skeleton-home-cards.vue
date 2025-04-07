<template>
  <div class="skeleton mentors-card">
    <div class="skeleton-photo" />
    <div class="skeleton-text">
      <div class="skeleton-title" />
      <div class="skeleton-subtitle" />
      <div class="skeleton-tags">
        <div
          v-for="n in 3"
          :key="n"
          class="skeleton-tag"
        />
      </div>
      <div class="skeleton-button" />
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  background: #f0f0f0;
  overflow: hidden;
  width: 314px;
  animation: pulse 1.5s infinite;
}

.skeleton-photo {
  height: 240px;
  background: #e0e0e0;
}

.skeleton-text {
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-title,
.skeleton-subtitle,
.skeleton-tag,
.skeleton-button {
  background: #e0e0e0;
  border-radius: 4px;
}

.skeleton-title {
  height: 20px;
  width: 70%;
}

.skeleton-subtitle {
  height: 16px;
  width: 50%;
}

.skeleton-tags {
  display: flex;
  gap: 4px;
}

.skeleton-tag {
  height: 16px;
  width: 60px;
}

.skeleton-button {
  height: 36px;
  width: 100px;
  margin-top: auto;
}

@keyframes pulse {
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
}
</style>
