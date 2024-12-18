export const OtpFormProps = {
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
  phone: String,
  title: String,
  buttonText: String,
  isButtonDisabled: Boolean
};

export const OtpFormEmits = [
  'update:modelValue',
  'handleSubmit',
  'handleResendClick'
];
