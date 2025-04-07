import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFormValidation } from '@/shared/utils/formValidate.js';
import { useOtpTitleStore } from '@/stores/otpTitle.js';
import { required } from '@/shared/utils/validationRules.js';
import { publicApi } from '@/shared/utils/api/axiosInstance.js';
import { useUserTokenStore } from '@/stores/authStore.js';
import { useUserStore } from '@/stores/userStore.js';
import { addToast } from '@/shared/utils/notifications.js';

export default function useOtpView() {
  const route = useRoute();
  const router = useRouter();
  const otpTitleStore = useOtpTitleStore();
  const title = otpTitleStore.newOtpTitle;
  const phone = route.query.phone;
  const useTokenStore = useUserTokenStore();
  const { getUser } = useUserStore();

  const countdown = ref(60);
  const isButtonDisabled = ref(true);
  const buttonText = ref('');

  const startCountdown = () => {
    updateButtonText();
    const interval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
        updateButtonText();
      } else {
        clearInterval(interval);
        isButtonDisabled.value = false;
        buttonText.value = 'Отправить снова';
      }
    }, 1000);
  };

  const updateButtonText = () => {
    const minutes = Math.floor(countdown.value / 60);
    const seconds = countdown.value % 60;
    buttonText.value = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleResendClick = () => {
    getOtpAgain();

    isButtonDisabled.value = true;
    countdown.value = 60;
    updateButtonText();
    startCountdown();
  };

  const formData = ref({
    phone: phone,
    otp: '',
  });

  const formRules = { otp: required, };

  const { errors, validate } = useFormValidation(formData, formRules);

  const onSubmit = async () => {
    if (validate()) {
      try {
        const response = await publicApi.post(
          'auth/login-confirm',
          formData.value
        );

        useTokenStore.setToken(response.data.token);

        await getUser();

        router.push('/');
      } catch (err) {
        const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
        addToast.error(errorMessage);
      }
    }
  };

  const getOtpAgain = async () => {
    await publicApi.post(`auth/login-otp?phone=${phone}`);
  };

  onMounted(() => {
    startCountdown();
  });

  return {
    formData,
    formRules,
    errors,
    title,
    phone,
    buttonText,
    isButtonDisabled,
    onSubmit,
    handleResendClick
  };
}
