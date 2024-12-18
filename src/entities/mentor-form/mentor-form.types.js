export const MentorFormProps = {
  modelValue: {
    type: Object,
  },
  rules: {
    type: Object,
    required: false,
  },
  errors: {
    type: Object,
    required: false,
  },
  data: Object,
  categoriesList: Array,
  rates: Array,
  showModal: Boolean,
  mentorPhoto: String,
  isLoading: Boolean
};

export const MentorFormEmits = [
  'update:modelValue',
  'handleSubmit',
  'onCloseModal',
  'deletePhoto'
];
