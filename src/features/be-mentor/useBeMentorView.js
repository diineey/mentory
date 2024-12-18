import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import {
  required,
  requiredCheckbox,
} from '@/shared/utils/validationRules.js';
import { useFormValidation } from '@/shared/utils/formValidate.js';
import { publicApi, withAuth } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';

export default function useBeMentorView() {
  const router = useRouter();
  const categoriesList = ref([]);
  const rates = ref([]);
  const agreementId = ref('');

  const formData = ref({
    skills: '',
    categories: [],
    workplace: '',
    position: '',
    language: [],
    mentorRate: '',
    linkedin: '',
    cv: null,
  });

  const linkedInOrCVRequired = {
    validator: () => {
      return !!formData.value.linkedin || !!formData.value.cv;
    },
    message: 'Заполните либо ссылку на LinkedIn, либо загрузите файл',
  };

  const formRules = {
    skills: required,
    linkedinOrCv: linkedInOrCVRequired,
    categories: requiredCheckbox,
    workplace: required,
    position: required,
    language: requiredCheckbox,
    mentorRate: required,
  };

  const { errors, validate } = useFormValidation(formData, formRules);

  const onSubmit = async () => {
    if (validate()) {
      const requestData = {
        skills: formData.value.skills
          .split(',')
          .map((skill) => skill.trim()),
        categories: formData.value.categories,
        workplace: formData.value.workplace,
        position: formData.value.position,
        language: formData.value.language,
        mentorRate: +formData.value.mentorRate,
        linkedin: formData.value.linkedin,
        yearsOfExperience: '',
        canHelpWith: '',
        about: '',
        cvName: '',
        mentorAgreementId: agreementId.value
      };

      const fileData = new FormData();

      if (formData.value.cv) {
        fileData.append('file', formData.value.cv);
      }

      try {
        if (formData.value.cv) {
          const response = await withAuth.post('upload-cv', fileData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          requestData.cvName = response.data;

          await withAuth.post('create-mentor-application', requestData);
        } else {
          await withAuth.post('create-mentor-application', requestData);
        }

        addToast.success('Ваша заявка на рассмотрении');

        await router.push({ name: 'home' });
      } catch (err) {
        const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
        addToast.error(errorMessage);
      }
    }
  };

  const getCategories = async () => {
    try {
      const response = await publicApi.get(
        'dictionary/get-all-categories'
      );

      categoriesList.value = response.data.categoryList;
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };

  const getRates = async () => {
    try {
      const response = await publicApi.get(
        'dictionary/get-all-mentor-rates'
      );

      rates.value = response.data.mentorRates;
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };
  
  const getMentorOffer = async () => {
    try {
      const response = await publicApi.get('agreement/get-public-agreement-for-role', {
        params: {
          role: 'MENTOR',
        },
      });
      
      const allHeaders = response.headers;
      
      console.log(allHeaders);
      
      agreementId.value = response.headers['agreement-id'];
      console.log(agreementId.value)
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };
  
  const downloadMentorAgreement = async () => {
    try {
      const response = await publicApi.get('agreement/get-public-agreement-for-role', {
        params: {
          role: 'MENTOR',
        },
        responseType: 'blob',
      });
      
      // const blob = new Blob([response.data], { type: 'application/pdf' });
      // const url = window.URL.createObjectURL(blob);
      //
      // window.open(url, '_blank');
      //
      // window.URL.revokeObjectURL(url);

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;

      const contentDisposition = response.headers['content-disposition'];
      const filename = contentDisposition
        ? contentDisposition.split('filename=')[1]?.replace(/"/g, '')
        : '';

      a.download = filename || '';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };

  onMounted(async () => {
    await Promise.all([getCategories(), getRates(), getMentorOffer()]);
  });

  return {
    categoriesList,
    rates,
    formData,
    formRules,
    errors,
    onSubmit,
    downloadMentorAgreement
  };
}
