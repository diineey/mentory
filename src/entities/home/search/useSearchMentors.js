import { useRoute } from 'vue-router';

export default function useSearchMentors(props, emit) {
  const route = useRoute();

  const updateModelValue = (field, value) => {
    emit('update:modelValue', {
      ...props.modelValue,
      [field]: value,
    });
  };

  const isSelected = (category) => {
    return route.query.parameter === category.name;
  };

  const handleSearchMentorBySkill = () => emit('handleSearchBySkill');

  const handleSearchMentorByCategory = (tag) => {
    emit('handleSearchByCategory', tag.name);
  };

  return {
    isSelected,
    updateModelValue,
    handleSearchMentorBySkill,
    handleSearchMentorByCategory,
  };
}
