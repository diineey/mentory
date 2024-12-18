export const RegistrationFormProps = {
  modelValue: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
    required: false,
  },
  errors: {
    type: Object,
    required: false,
  },
};

export const RegistrationFormEmits = ['update:modelValue', 'handleSubmit', 'downloadOffer'];
