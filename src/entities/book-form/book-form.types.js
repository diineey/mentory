export const BookFormProps = {
  modelValue: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: false
  },
  errors: {
    type: Object,
    required: false
  },
  data: Object
};

export const BookFormEmits = [
  'update:modelValue',
  'handleSubmit'
];