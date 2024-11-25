import { ref, watch } from 'vue';

export default function useMentorForm(props, emit) {
  const isCustomCategorySelected = ref(false);
  const customCategory = ref('');
  const localFormData = ref({ ...props.modelValue });
  const selectedCategories = ref([...localFormData.value.categories]);
  const selectedLanguages = ref([...localFormData.value.languages]);
  const selectedMentorRate = ref(localFormData.value.mentorRateId.id);
  const fileInput = ref(null);
  const selectedImage = ref(props.mentorPhoto || '');
  
  const onCloseModal = () => emit('onCloseModal');
  
  const onToggleChoice = () => {
    isCustomCategorySelected.value = !isCustomCategorySelected.value;
  };
  
  const updateModelValue = (field, value) => {
    if (field === 'language') {
      selectedLanguages.value = value;
    }
    
    if (field === 'categories') {
      let updatedCategories = [...value];
      
      if (isCustomCategorySelected.value && customCategory.value.trim()) {
        updatedCategories.push(customCategory.value);
      }
    }
    
    if (field === 'photo') {
      localFormData.value.photo = value;
    }
    
    if (field === 'mentorRateId') {
      selectedMentorRate.value = value;
    }
    
    const mentorRate =
      props.rates.find((rate) => rate.id === selectedMentorRate.value) ||
      {};
    
    localFormData.value = {
      ...localFormData.value,
      languages: selectedLanguages.value,
      categories: selectedCategories.value,
      mentorRateId: mentorRate,
    };
    
    // emit('update:modelValue', {
    //   ...props.modelValue,
    //   [field]: value,
    // });
    
    emit('update:modelValue', localFormData.value);
  };
  
  const triggerFileInput = () => {
    fileInput.value.click();
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      selectedImage.value = URL.createObjectURL(file);
      
      updateModelValue('photo', file);
    }
  };
  
  const removeFile = () => {
    fileInput.value.value = '';
    
    if (selectedImage.value) {
      URL.revokeObjectURL(selectedImage.value);
      selectedImage.value = '';
    }
    
    updateModelValue('photo', null);
  };
  
  const handleSubmit = () => {
    emit('handleSubmit');
  };
  
  watch(
    () => props.mentorPhoto,
    (newPhoto) => {
      if (newPhoto) {
        selectedImage.value = newPhoto;
      }
    },
    { immediate: true }
  );
  
  watch(
    () => props.modelValue,
    (newValue) => {
      localFormData.value = { ...newValue };
      selectedCategories.value = [...newValue.categories];
      selectedLanguages.value = [...newValue.languages];
      selectedMentorRate.value = newValue.mentorRateId.id;
    },
    { deep: true, immediate: true },
  );
  
  return {
    localFormData,
    isCustomCategorySelected,
    customCategory,
    selectedCategories,
    selectedLanguages,
    selectedMentorRate,
    fileInput,
    selectedImage,
    handleFileChange,
    triggerFileInput,
    removeFile,
    onCloseModal,
    onToggleChoice,
    updateModelValue,
    handleSubmit,
  };
}
