import { ref } from 'vue';

export default function useBeMentor(props, emit) {
  const isCustomCategorySelected = ref(false);
  const customCategory = ref('');
  const selectedCategories = ref([]);
  const selectedLanguages = ref([]);
  const fileInput = ref(null);
  const fileName = ref('');
  const isOfferChecked = ref(false);

  const onToggleChoice = () => {
    isCustomCategorySelected.value = !isCustomCategorySelected.value;
  };

  const updateModelValue = (field, value) => {
    if (field === 'language') {
      selectedLanguages.value = value;
    }

    if (field === 'categories') {
      let updatedCategories = [ ...value ];

      if (isCustomCategorySelected.value && customCategory.value.trim()) {
        updatedCategories.push(customCategory.value);
      }
    }

    if (field === 'cv') {
      emit('update:modelValue', {
        ...props.modelValue,
        cv: value,
      });
    } else {
      emit('update:modelValue', {
        ...props.modelValue,
        [field]: value,
      });
    }
  };

  const triggerFileInput = () => {
    fileInput.value.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      updateModelValue('cv', file);
      fileName.value = file.name;
    }
  };

  const removeFile = () => {
    fileName.value = '';
    fileInput.value.value = '';
  };

  const handleSubmit = () => emit('handleSubmit');

  const onDownloadOffer = () => emit('downloadOffer');

  const onToggleOffer = () => {
    isOfferChecked.value = !isOfferChecked.value;
  };

  return {
    fileInput,
    fileName,
    isCustomCategorySelected,
    selectedLanguages,
    selectedCategories,
    customCategory,
    isOfferChecked,
    onToggleOffer,
    removeFile,
    handleFileChange,
    triggerFileInput,
    updateModelValue,
    onToggleChoice,
    handleSubmit,
    onDownloadOffer
  };
}
