import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore.js';
import { computed } from 'vue';

export default function useMentorsCards() {
  const router = useRouter();
  const userStore = useUserStore();

  const user = computed(() => userStore.user || {});

  function goToMentorDetails(id) {
    router.push({
      name: user?.value.mentorUserEntity?.id === id ? 'profile' : 'mentor',
      query: {
        id,
      },
    });
  }

  return {
    goToMentorDetails,
  };
}
