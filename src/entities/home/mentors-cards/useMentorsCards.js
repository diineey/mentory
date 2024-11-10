import { useRouter } from 'vue-router'

export default function useMentorsCards() {
  const router = useRouter();

  const goToMentorDetails = (id) => {
    router.push({
      name: 'mentor',
      query: { id }
    });
  }

  return {
    goToMentorDetails
  }
}