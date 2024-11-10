import { ref } from 'vue';

export function useFormValidation(formData, formRules) {
  const errors = ref({});

  const validate = () => {
    errors.value = {}; // Сброс ошибок
    let isValid = true;

    Object.keys(formRules).forEach((key) => {
      const rule = formRules[key];
      const value = formData.value[key];

      if (rule.validator(value) === false) {
        errors.value[key] = rule.message;
        isValid = false;
      }
    });

    return isValid;
  };

  return {
    errors,
    validate
  };
}
