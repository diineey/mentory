import { useRouter } from 'vue-router'

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

  return {
    router,
    goToMentor
  }
}