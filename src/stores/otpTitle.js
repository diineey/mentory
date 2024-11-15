import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOtpTitleStore = defineStore('otpTitle', () => {
  const newOtpTitle = ref('');

  function setTitle(title) {
    newOtpTitle.value = title;
  }

  return { setTitle, newOtpTitle };
});
