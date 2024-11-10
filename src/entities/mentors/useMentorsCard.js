import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { languageMap } from '@/shared/utils/enums.js'

export default function UseMentorsCard(props) {
  const router = useRouter();

  function goToMentor(id) {
    router.push({
      name: 'mentor',
      query: {
        id
      }
    })
  }

  const decodedLanguages =  computed(() => {
    return props.mentors?.user?.languages?.map(code => languageMap[code] || code).join(", ");
  })

  return {
    decodedLanguages,
    router,
    goToMentor
  }
}