import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { required, requiredCheckbox } from '@/shared/utils/validationRules.js'
import { useFormValidation } from '@/shared/utils/formValidate.js'
import { publicApi, withAuth } from '@/shared/utils/api/axiosInstance.js'
import { addToast } from '@/shared/utils/notifications.js'

export default function useBeMentorView() {
  const router = useRouter()
  const categoriesList = ref([])
  const rates = ref([])

  const formData = ref({
    skills: '',
    categories: [],
    workplace: '',
    position: '',
    language: [],
    mentorRate: '',
    linkedin: '',
    cv: null
  })

  const linkedInOrCVRequired = {
    validator: () => {
      return !!formData.value.linkedin || !!formData.value.cv
    },
    message: 'Заполните либо ссылку на LinkedIn, либо загрузите файл'
  }

  const formRules = {
    skills: required,
    linkedinOrCv: linkedInOrCVRequired,
    categories: requiredCheckbox,
    workplace: required,
    position: required,
    language: requiredCheckbox,
    mentorRate: required
  }

  const { errors, validate } = useFormValidation(formData, formRules)

  const onSubmit = async () => {
    if (validate()) {
      const newFormData = new FormData();

      const requestData = {
        skills: JSON.stringify(formData.value.skills.split(',').map(skill => skill.trim())),
        categories: JSON.stringify(formData.value.categories),
        workplace: formData.value.workplace,
        position: formData.value.position,
        language: JSON.stringify(formData.value.language),
        mentorRate: +formData.value.mentorRate,
        linkedin: formData.value.linkedin,
        yearsOfExperience: '',
        canHelpWith: '',
        about: ''
      }

      console.log(formData.value.cv)

      const jsonBlob = new Blob([JSON.stringify(requestData)], { type: 'application/json' });
      newFormData.append('request', jsonBlob);

      if (formData.value.cv) {
        newFormData.append('file', formData.value.cv);
      }

      try {
        await withAuth.post('create-mentor-application', newFormData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        addToast.success('Ваша заявка на рассмотрении')
      } catch (err) {
        addToast.error('Internal server error')
      }
    }
  }

  const getCategories = async () => {
    try {
      const response = await publicApi.get('dictionary/get-all-categories')

      categoriesList.value = response.data.categoryList
    } catch (err) {
      addToast.error('Internal server error')
    }
  }

  const getRates = async () => {
    try {
      const response = await publicApi.get('dictionary/get-all-mentor-rates')

      rates.value = response.data.mentorRates
    } catch (err) {
      addToast.error('Internal server error')
    }
  }

  onMounted(async () => {
    await Promise.all([
      getCategories(),
      getRates()
    ])
  })

  return {
    categoriesList,
    rates,
    formData,
    formRules,
    errors,
    onSubmit
  }
}