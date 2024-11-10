import { ref, watch } from 'vue'

export default function useMentorForm(props, emit) {
  const isCustomCategorySelected = ref(false)
  const customCategory = ref('')
  const localFormData = ref({ ...props.modelValue })
  const selectedCategories = ref([...localFormData.value.categories])
  const selectedLanguages = ref([...localFormData.value.languages])
  const selectedMentorRate = ref(localFormData.value.mentorRateId.id)

  const onCloseModal = () => emit('onCloseModal')

  const onToggleChoice = () => {
    isCustomCategorySelected.value = !isCustomCategorySelected.value
  }

  const updateModelValue = (field, value) => {
    if (field === 'language') {
      selectedLanguages.value = value
    }

    if (field === 'categories') {
      let updatedCategories = [...value]

      if (isCustomCategorySelected.value && customCategory.value.trim()) {
        updatedCategories.push(customCategory.value)
      }
    }

    if (field === 'mentorRate') {
      selectedMentorRate.value = value
    }

    const mentorRate = props.rates.find(rate => rate.id === selectedMentorRate.value) || {}

    localFormData.value = {
      ...localFormData.value,
      languages: selectedLanguages.value,
      categories: selectedCategories.value,
      mentorRateId: mentorRate
    }

    emit('update:modelValue', localFormData.value)
  }

  const handleSubmit = () => {
    emit('handleSubmit')
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      localFormData.value = { ...newValue }
      selectedCategories.value = [...newValue.categories]
      selectedLanguages.value = [...newValue.languages]
      selectedMentorRate.value = newValue.mentorRateId.id
    },
    { deep: true, immediate: true }
  )

  return {
    localFormData,
    isCustomCategorySelected,
    customCategory,
    selectedCategories,
    selectedLanguages,
    selectedMentorRate,
    onCloseModal,
    onToggleChoice,
    updateModelValue,
    handleSubmit
  }
}