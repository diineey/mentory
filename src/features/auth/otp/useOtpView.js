import { ref } from 'vue';
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

  const formData = ref({
    phone: phone,
    otp: '',
  });

  const formRules = {
    otp: required,
  };

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
        addToast.error('Internal server error');
      }
    }
  };

  return {
    formData,
    formRules,
    errors,
    title,
    phone,
    onSubmit,
  };
}
