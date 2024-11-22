import { computed } from 'vue';
import formatPhoneNumber from '@/shared/utils/formatters.js';

export default function useOtpForm(props, emit) {
  const updateModelValue = (field, value) => {
    emit('update:modelValue', {
      ...props.modelValue,
      [field]: value,
    });
  };

  const phoneNumber = computed(() => formatPhoneNumber(props.phone));

  const handleSubmit = () => {
    emit('handleSubmit');
  };
  
  const getOtp = () => emit('getOtp');

  return {
    phoneNumber,
    getOtp,
    handleSubmit,
    updateModelValue,
  };
}
