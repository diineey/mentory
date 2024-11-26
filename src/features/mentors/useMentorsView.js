import { onMounted, onUnmounted, ref, watch } from 'vue';
import { publicApi } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';
import { useRoute, useRouter } from 'vue-router';

export default function useMentorsView() {
  const route = useRoute();
  const router = useRouter();
  const mentors = ref([]);
  const categories = ref([]);
  const isCategoriesLoading = ref(false);
  const isMentorsLoading = ref(false);

  const formData = ref({
    skill: '',
  });

  const getMentors = async () => {
    isMentorsLoading.value = true;

    try {
      const response = await publicApi.get(
        'mentor-common-info/get-all-mentors',
        {
          params: {
            size: 10,
            page: 0,
          },
        }
      );
      
      mentors.value = response.data.mentors;
      
      const photoPromises = mentors.value
        .filter((mentor) => mentor.photoExists)
        .map((mentor) => getMentorsPhoto(mentor.id));
      
      await Promise.all(photoPromises);
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    } finally {
      isMentorsLoading.value = false;
    }
  };

  const getCategories = async () => {
    isCategoriesLoading.value = true;

    try {
      const response = await publicApi.get(
        'dictionary/get-all-categories'
      );

      categories.value = response.data.categoryList;
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    } finally {
      isCategoriesLoading.value = false;
    }
  };

  const getMentorsByFilter = async (filter) => {
    try {
      const response = await publicApi.get(
        'mentor-common-info/get-mentors-by-parameter',
        {
          params: {
            parameter: filter,
            page: 0,
            size: 10,
          },
        }
      );

      mentors.value = response.data.mentors;

      router.push({
        query: {
          parameter: filter,
        },
      });
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };
  
  const getMentorsPhoto = async (id) => {
    try {
      const response = await publicApi.get('mentor-common-info/get-mentor-photo', {
        params: { id },
        responseType: 'blob'
      });
      
      const mentor = mentors.value.find((m) => m.id === id);
      if (mentor) {
        mentor.photoUrl = URL.createObjectURL(response.data);
      }
    } catch (err) {
      addToast.error(`Не удалось загрузить фотографию для ментора с ID ${id}`);
    }
  };

  const getMentorsBySkill = async () => {
    await getMentorsByFilter(formData.value.skill);
  };

  const getMentorsByCategory = async (category) => {
    await getMentorsByFilter(category);
  };
  
  const revokePhotoUrls = () => {
    mentors.value.forEach((mentor) => {
      if (mentor.photoUrl) {
        URL.revokeObjectURL(mentor.photoUrl);
        mentor.photoUrl = null;
      }
    });
  };

  onMounted(async () => {
    const mentorsPromise = route.query.parameter
      ? getMentorsByFilter(route.query.parameter)
      : getMentors();

    await Promise.all([getCategories(), mentorsPromise]);
  });
  
  onUnmounted(() => {
    revokePhotoUrls();
  });

  watch(
    () => route.query.parameter,
    async (newParameter) => {
      if (newParameter && newParameter !== '') {
        await getMentorsByFilter(newParameter);
      } else {
        await getMentors();
      }
    }
  );

  return {
    formData,
    categories,
    mentors,
    isCategoriesLoading,
    isMentorsLoading,
    getMentors,
    getMentorsByFilter,
    getMentorsByCategory,
    getMentorsBySkill,
  };
}
