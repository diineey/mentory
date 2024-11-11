import {onMounted, ref, watch} from 'vue'
import {publicApi} from '@/shared/utils/api/axiosInstance.js'
import {addToast} from '@/shared/utils/notifications.js'
import {useRoute, useRouter} from 'vue-router'

export default function useMentorsView() {
  const route = useRoute()
  const router = useRouter()
  const mentors = ref([])
  const categories = ref([])
  const isCategoriesLoading = ref(false)
  const isMentorsLoading = ref(false)

  const formData = ref({
    skill: ''
  })

  const getMentors = async () => {
    isMentorsLoading.value = true

    try {
      const response = await publicApi.get('mentor-common-info/get-all-mentors', {
        params: {
          size: 10,
          page: 0
        },
      });

      mentors.value = response.data.mentors;
    } catch (err) {
      addToast.error('Internal server error');
    } finally {
      isMentorsLoading.value = false
    }
  };

  const getCategories = async () => {
    isCategoriesLoading.value = true

    try {
      const response = await publicApi.get('/dictionary/get-all-categories');

      categories.value = response.data.categoryList;
    } catch (err) {
      addToast.error('Internal server error');
    } finally {
      isCategoriesLoading.value = false
    }
  };

  const getMentorsByFilter = async (filter) => {
    try {
      const response = await publicApi.get('mentor-common-info/get-mentors-by-parameter', {
        params: {
          parameter: filter,
          page: 0,
          size: 10
        },
      })
      mentors.value = response.data.mentors

      router.push({
        query: {
          parameter: filter
        }
      });
    } catch (err) {
      addToast.error('Internal server error')
    }
  }

  const getMentorsBySkill = async () => {
    await getMentorsByFilter(formData.value.skill)
  }

  const getMentorsByCategory = async (category) => {
    await getMentorsByFilter(category)
  }

  onMounted(async () => {
    await getCategories()

    if (route.query.parameter) {
      await getMentorsByFilter(route.query.parameter);
    } else {
      await getMentors()
    }
  });

  watch(
      () => route.query.parameter,
      async (newParameter) => {
        if (newParameter) {
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
    getMentorsBySkill
  }
}