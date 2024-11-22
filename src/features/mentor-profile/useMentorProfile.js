import { onMounted, ref } from 'vue';
import { publicApi, withAuth } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';
import { useRoute } from 'vue-router';

export default function useMentorProfile() {
  const data = ref({});
  const route = useRoute();
  const mentorId = route.query.id;
  const isEditModalActive = ref(false);
  const categoriesList = ref([]);
  const rates = ref([]);

  const formData = ref({
    firstname: '',
    lastname: '',
    skills: '',
    categories: [],
    currentWorkplace: '',
    position: '',
    languages: [],
    mentorRateId: '',
    about: '',
    canHelpWith: '',
    yearsOfExperience: '',
    photo
  });

  const getMentorInfo = async () => {
    try {
      const response = await publicApi.get(
        'mentor-common-info/get-mentor-info',
        {
          params: { id: mentorId },
        }
      );

      data.value = response.data;

      formData.value = {
        firstname: data.value.firstname || '',
        lastname: data.value.lastname || '',
        skills: data.value.skillList || '',
        categories: data.value.categoryList || [],
        currentWorkplace: data.value.workplace || '',
        position: data.value.position || '',
        languages: data.value.languages || [],
        mentorRateId: data.value.mentorRate || '',
        about: data.value.about || '',
        canHelpWith: data.value.canHelpWith || '',
        yearsOfExperience: data.value.yearsOfExperience || '',
        photo: ''
      };
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
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

  const onSubmit = async () => {
    const payload = {
      firstname: formData.value.firstname || '',
      lastname: formData.value.lastname || '',
      skills:
        typeof formData.value.skills === 'string' &&
        formData.value.skills.trim() !== ''
          ? formData.value.skills.split(',').map((skill) => skill.trim())
          : [],
      categories: formData.value.categories || [],
      currentWorkplace: formData.value.currentWorkplace || '',
      position: formData.value.position || '',
      languages: formData.value.languages || [],
      mentorRateId: formData.value.mentorRateId.id || '',
      about: formData.value.about || '',
      canHelpWith: formData.value.canHelpWith || '',
      yearsOfExperience: formData.value.yearsOfExperience || ''
    };

    try {
      await withAuth.post('mentor-manager/add-info-about', payload);

      onToggleEditModal();

      await getMentorInfo();

      addToast.success('Успешно!');
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };

  const onToggleEditModal = () => {
    isEditModalActive.value = !isEditModalActive.value;
  };

  onMounted(async () => {
    await Promise.all([getMentorInfo(), getCategories(), getRates()]);
  });

  return {
    data,
    formData,
    categoriesList,
    rates,
    isEditModalActive,
    onToggleEditModal,
    onSubmit,
  };
}
