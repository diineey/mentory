export const SearchMentorsProps = {
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
  isLoading: Boolean,
  categories: Array,
};

export const SearchMentorsEmits = [
  'update:modelValue',
  'handleSearchBySkill',
  'handleSearchByCategory',
  'handleSearchByFilter',
];
