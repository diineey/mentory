import {
  ref, watch
} from 'vue';

export default function useMentorForm(props, emit) {
  const isCustomCategorySelected = ref(false);
  const customCategory = ref('');
  const localFormData = ref({
    ...props.modelValue
  });
  const skills = ref(Array.isArray(props.modelValue.skills)
    ? props.modelValue.skills.join(',')
    : props.modelValue.skills || ''
  );
  const selectedCategories = ref([ ...localFormData.value.categories ]);
  const selectedLanguages = ref([ ...localFormData.value.languages ]);
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

    if (field === 'skills') {
      skills.value = value;
    }

    if (field === 'categories') {
      let updatedCategories = [ ...value ];

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
      skills: skills.value,
      languages: selectedLanguages.value,
      categories: selectedCategories.value,
      mentorRateId: mentorRate,
    };

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

    if (props.mentorPhoto) emit('deletePhoto');
  };

  const handleSubmit = () => {
    localFormData.value.skills = Array.isArray(skills.value)
      ? skills.value.join(',')
      : skills.value.trim();

    emit('handleSubmit');
  };

  watch(
    () => props.mentorPhoto,
    (newPhoto) => {
      if (newPhoto) {
        selectedImage.value = newPhoto;
      }
    },
    {
      immediate: true
    }
  );

  watch(
    () => props.modelValue,
    (newValue) => {
      localFormData.value = {
        ...newValue
      };
      skills.value = Array.isArray(newValue.skills)
        ? newValue.skills.join(',')
        : newValue.skills || '';
      selectedCategories.value = [ ...newValue.categories ];
      selectedLanguages.value = [ ...newValue.languages ];
      selectedMentorRate.value = newValue.mentorRateId.id;
    },
    {
      deep: true, immediate: true
    },
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
