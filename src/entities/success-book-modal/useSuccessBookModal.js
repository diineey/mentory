export default function useSuccessBookModal(props, emit) {
  const onCloseModal = () => emit('closeModal');

  return {
    onCloseModal,
  };
}
