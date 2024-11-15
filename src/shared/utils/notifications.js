import { reactive, computed } from 'vue';

export const notificationStore = reactive({
  notifications: [],
});

export const notificationsList = computed(
  () => notificationStore.notifications
);

export function addNotification(message, type = 'success') {
  const notification = { message, type };

  notificationStore.notifications.push(notification);

  setTimeout(() => {
    notificationStore.notifications.shift();
  }, 3000);
}

export const addToast = {
  success(message) {
    addNotification(message, 'success');
  },
  error(message) {
    addNotification(message, 'error');
  },
};
