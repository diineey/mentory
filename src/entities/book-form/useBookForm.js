import { computed, ref, watch } from 'vue'
import { useUserTokenStore } from '@/stores/authStore.js'
import { useRouter } from 'vue-router'

export default function useBookForm(props, emit) {
  const userToken = useUserTokenStore()
  const router = useRouter()
  const localFormData = ref({ ...props.modelValue })

  const isAuthenticated = computed(() => userToken.isAuthenticated)

  const updateModelValue = () => {
    localFormData.value = {
      ...localFormData.value
    }

    emit('update:modelValue', localFormData.value)
  };

  const handleSubmit = () => {
    emit('handleSubmit');
  };

  function submitHandler() {
    if (isAuthenticated.value) {
      handleSubmit()
    } else {
      router.push({ name: 'sign-in' })
    }
  }

  const onOpenModal = () => emit('handleOpenEditModal')

  watch(
    () => props.modelValue,
    (newValue) => {
      localFormData.value = { ...newValue }
    },
    { deep: true, immediate: true }
  )

  return {
    isAuthenticated,
    router,
    localFormData,
    onOpenModal,
    updateModelValue,
    submitHandler
  }
}