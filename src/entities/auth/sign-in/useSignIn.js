export default function useSignIn(props, emit) {
  const updateModelValue = (field, value) => {
    emit('update:modelValue', {
      ...props.modelValue,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    emit('handleSubmit');
  };

  return {
    handleSubmit,
    updateModelValue,
  };
}
