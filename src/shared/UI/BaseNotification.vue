<script setup>
import { notificationsList } from '../utils/notifications.js';

const getIcon = (type) => {
  return type === 'success'
    ? new URL('../../components/icons/success.svg', import.meta.url).href
    : new URL('../../components/icons/error.svg', import.meta.url).href;
};
</script>

<template>
  <div class="notifications-container">
    <div
      v-for="(notification, index) in notificationsList"
      :key="index"
      class="notification input-title"
      :class="notification.type"
    >
      <img
        :src="getIcon(notification.type)"
        :alt="notification.type === 'error' ? 'Error' : 'Success'"
        class="notification-icon"
      />

      {{ notification.message }}
    </div>
  </div>
</template>

<style>
.notifications-container {
  position: fixed;
  top: 110px;
  right: 60px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  gap: 15px;
}

.notification {
  padding: 20px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.success {
  background-color: var(--success);
}

.error {
  background-color: var(--error);
}
</style>
