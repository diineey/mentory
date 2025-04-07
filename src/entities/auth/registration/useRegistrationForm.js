import { ref } from 'vue';

export default function useRegistrationForm(props, emit) {
  const isOfferChecked = ref(false);

  const updateModelValue = (field, value) => {
    emit('update:modelValue', {
      ...props.modelValue,
      [field]: value,
    });
  };

  const handleSubmit = () => emit('handleSubmit');

  const onDownloadOffer = () => emit('downloadOffer');

  const onToggleOffer = () => {
    isOfferChecked.value = !isOfferChecked.value;
  };

  return {
    isOfferChecked,
    onToggleOffer,
    handleSubmit,
    updateModelValue,
    onDownloadOffer
  };
}
