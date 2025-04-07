import {
  computed, ref, watch
} from 'vue';
import { useUserTokenStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

export default function useBookForm(props, emit) {
  const userToken = useUserTokenStore();
  const router = useRouter();
  const localFormData = ref({
    ...props.modelValue
  });

  const isAuthenticated = computed(() => userToken.isAuthenticated);

  const todayDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  };

  const updateModelValue = () => {
    localFormData.value = {
      ...localFormData.value,
    };

    emit('update:modelValue', localFormData.value);
  };

  const handleSubmit = () => {
    emit('handleSubmit');
  };

  function submitHandler() {
    if (isAuthenticated.value) {
      handleSubmit();

      emit('update:modelValue', {});
    } else {
      router.push({
        name: 'sign-in'
      });
    }
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      localFormData.value = {
        ...newValue
      };
    },
    {
      deep: true, immediate: true
    }
  );

  return {
    isAuthenticated,
    router,
    localFormData,
    todayDate,
    updateModelValue,
    submitHandler,
  };
}
