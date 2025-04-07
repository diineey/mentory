import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useOtpTitleStore } from '@/stores/otpTitle';
import { useFormValidation } from '@/shared/utils/formValidate';
import { unmaskPhoneNumber } from '@/shared/utils/masks';
import { phoneLength } from '@/shared/utils/validationRules';
import { publicApi } from '@/shared/utils/api/axiosInstance';
import { addToast } from '@/shared/utils/notifications';

export default function useSignInView() {
  const router = useRouter();
  const otpTitleStore = useOtpTitleStore();

  const formData = ref({
    phone: '',
  });

  const formRules = {
    phone: phoneLength,
  };

  const {
    errors, validate
  } = useFormValidation(formData, formRules);

  function goToOtp() {
    otpTitleStore.setTitle('Вход');
    router.push({
      name: 'confirm-otp',
      query: {
        phone: formData.value.phone,
      },
    });
  }

  const onSubmit = async () => {
    formData.value.phone = unmaskPhoneNumber(formData.value.phone);

    if (validate()) {
      try {
        await publicApi.post(`auth/login-otp?phone=${formData.value.phone}`);

        goToOtp();
      } catch (err) {
        const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
        addToast.error(errorMessage);
      }
    }
  };

  return {
    formData,
    formRules,
    errors,
    onSubmit,
  };
}
