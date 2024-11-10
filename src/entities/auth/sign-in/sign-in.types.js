export const SignInFormProps = {
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
  }
};

export const SignInFormEmits = [
  'update:modelValue',
  'handleSubmit'
];