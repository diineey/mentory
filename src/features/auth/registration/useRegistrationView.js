import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useOtpTitleStore } from '@/stores/otpTitle.js';
import { unmaskDate, unmaskPhoneNumber } from '@/shared/utils/masks.js';
import { useFormValidation } from '@/shared/utils/formValidate.js';
import { required, validDate } from '@/shared/utils/validationRules.js';
import { publicApi } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';

export default function useRegistrationView() {
  const router = useRouter();
  const otpTitleStore = useOtpTitleStore();

  const formData = ref({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    email: '',
    gender: '',
  });

  const formRules = {
    firstName: required,
    phoneNumber: required,
    gender: required,
    dateOfBirth: validDate,
  };

  const { errors, validate } = useFormValidation(formData, formRules);

  function goToOtp() {
    otpTitleStore.setTitle('Подтверждение');
    router.push({
      name: 'confirm-otp',
      query: {
        phone: formData.value.phoneNumber,
      },
    });
  }

  const onSubmit = async () => {
    formData.value.phoneNumber = unmaskPhoneNumber(
      formData.value.phoneNumber
    );

    let unmaskedDateOfBirth = '';

    if (formData.value.dateOfBirth) {
      unmaskedDateOfBirth = unmaskDate(formData.value.dateOfBirth);
    }

    if (validate()) {
      const dataToSend = {
        ...formData.value,
        dateOfBirth: unmaskedDateOfBirth,
      };

      try {
        await publicApi.post('auth/signup', dataToSend);

        await publicApi.post(`auth/login-otp?phone=${formData.value.phoneNumber}`)

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
