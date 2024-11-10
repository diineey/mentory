import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { languageMap } from '@/shared/utils/enums.js'
import { formatYearsAndMonths } from '@/shared/utils/formatters.js'

export default function useMentorDetailsForm(props, emit) {
  const router = useRouter()

  const decodedLanguages =  computed(() => {
     return props.data?.languages?.map(code => languageMap[code] || code).join(", ") || ''
  })

  const experience = computed(() => {
    return formatYearsAndMonths(props.data?.yearsOfExperience || 0)
  })

  const scrollToBookingSection = () => {
    emit('scrollToBookingSection')
  }

  const onOpenModal = () => emit('handleOpenEditModal')

  return {
    decodedLanguages,
    router,
    experience,
    onOpenModal,
    scrollToBookingSection
  }
}