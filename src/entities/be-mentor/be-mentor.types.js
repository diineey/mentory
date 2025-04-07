export const BeMentorProps = {
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
  categoriesList: Array,
  rates: Array,
};

export const BeMentorEmits = [ 'update:modelValue', 'handleSubmit', 'downloadOffer' ];
