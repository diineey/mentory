import {
  onMounted, onUnmounted, ref
} from 'vue';
import { publicApi } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';
import { useRouter } from 'vue-router';

export default function useHomeView() {
  const router = useRouter();
  const mentors = ref([]);
  const categories = ref([]);
  const isMentorsLoading = ref(false);
  const isCategoriesLoading = ref(false);

  const formData = ref({ skill: '', });

  const getMentors = async () => {
    isMentorsLoading.value = true;

    try {
      const response = await publicApi.get(
        'mentor-common-info/get-all-mentors',
        {
          params: {
            size: 4,
            page: 0,
          },
        },
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

  const getMentorsPhoto = async (id) => {
    try {
      const response = await publicApi.get('mentor-common-info/get-mentor-photo', {
        params: { id },
        responseType: 'blob',
      });

      const mentor = mentors.value.find((m) => m.id === id);
      if (mentor) {
        mentor.photoUrl = URL.createObjectURL(response.data);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };

  const getCategories = async () => {
    isCategoriesLoading.value = true;

    try {
      const response = await publicApi.get(
        'dictionary/get-all-categories',
      );

      categories.value = response.data.categoryList;
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    } finally {
      isCategoriesLoading.value = false;
    }
  };

  const handleSearchMentorsBySkill = async () => {
    router.push({
      name: 'mentors',
      query: { parameter: formData.value.skill, },
    });
  };

  const handleSearchMentorsByCategory = async (category) => {
    router.push({
      name: 'mentors',
      query: { parameter: category, },
    });
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
    await Promise.all([ await getCategories(), await getMentors() ]);
  });

  onUnmounted(() => {
    revokePhotoUrls();
  });

  return {
    formData,
    categories,
    mentors,
    isMentorsLoading,
    isCategoriesLoading,
    getMentors,
    handleSearchMentorsBySkill,
    handleSearchMentorsByCategory,
  };
}
