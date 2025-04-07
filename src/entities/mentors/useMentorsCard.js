import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore.js';
import { computed } from 'vue';

export default function UseMentorsCard() {
  const router = useRouter();
  const userStore = useUserStore();

  const user = computed(() => userStore.user || {});

  function goToMentor(id) {
    router.push({
      name: user?.value.mentorUserEntity?.id === id ? 'profile' : 'mentor',
      query: { id, },
    });
  }

  return {
    router,
    goToMentor,
  };
}
