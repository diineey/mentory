import { onMounted, onUnmounted, ref } from 'vue';
import { useFormValidation } from '@/shared/utils/formValidate.js';
import {
  required,
  requiredCheckbox,
} from '@/shared/utils/validationRules.js';
import { publicApi, withAuth } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';
import { useRoute } from 'vue-router';

export default function useMentorView() {
  const data = ref({});
  const route = useRoute();
  const mentorId = route.query.id;
  const isSuccessModalActive = ref(false);
  const categoriesList = ref([]);
  const rates = ref([]);
  const mentorPhoto = ref('')

  const formData = ref({
    title: '',
    agenda: '',
    date: '',
    time: '',
    hasToPay: '',
  });

  const formRules = {
    title: required,
    agenda: required,
    date: required,
    time: required,
    hasToPay: requiredCheckbox,
  };

  const { errors, validate } = useFormValidation(formData, formRules);

  const getMentorInfo = async () => {
    try {
      const response = await publicApi.get(
        'mentor-common-info/get-mentor-info',
        {
          params: { id: mentorId },
        }
      );

      data.value = response.data;
      
      if (data.value.isPhotoExist) await getPhoto();
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  };

  const onSubmit = async () => {
    if (validate()) {
      const { date, time } = formData.value;
      const dateTimeString = `${date}T${time}:00`;
      const localDate = new Date(dateTimeString + 'Z');
      const formattedBookingDate = localDate.toISOString().slice(0, 16);

      const payload = {
        mentorId: +mentorId,
        title: formData.value.title,
        agenda: formData.value.agenda,
        bookingDate: formattedBookingDate,
      };

      try {
        await withAuth.post('booking/book-mentor', payload);

        isSuccessModalActive.value = true;
      } catch (err) {
        const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
        addToast.error(errorMessage);
      }
    }
  };
  
  const getPhoto = async () => {
    try {
      const response = await publicApi.get('mentor-common-info/get-mentor-photo', {
        params: { id: mentorId },
        responseType: 'blob',
      });
      
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      mentorPhoto.value = URL.createObjectURL(blob);
    } catch (err) {
      const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
      addToast.error(errorMessage);
    }
  }

  const onCloseModal = () => {
    isSuccessModalActive.value = false;
  };

  const scrollToBookingSection = () => {
    const bookFormElement = document.querySelector('#book-form-section');

    if (bookFormElement) {
      bookFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMounted(async () => {
    await Promise.all([getMentorInfo()]);
    
    onUnmounted(() => {
      if (mentorPhoto.value) {
        URL.revokeObjectURL(mentorPhoto.value);
        mentorPhoto.value = null;
      }
    })
  });

  return {
    data,
    errors,
    formData,
    formRules,
    categoriesList,
    rates,
    mentorPhoto,
    isSuccessModalActive,
    scrollToBookingSection,
    onCloseModal,
    onSubmit,
  };
}
