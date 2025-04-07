import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/userStore.js';
import { useUserTokenStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Главная', },
      component: () => import('@/pages/home/HomePage.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      meta: { title: 'Вход', },
      component: () => import('@/pages/login/LoginPage.vue'),
    },
    {
      path: '/confirm-otp',
      name: 'confirm-otp',
      meta: { title: 'Подтверждение ОТП', },
      component: () => import('@/pages/login-otp/LoginOtp.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      meta: { title: 'Регистрация', },
      component: () => import('@/pages/registration/RegistrationPage.vue'),
    },
    {
      path: '/be-mentor',
      name: 'be-mentor',
      meta: { title: 'Стать ментором', },
      component: () => import('@/pages/be-mentor/BeMentorPage.vue'),
      beforeEnter: (to, from, next) => {
        const userTokenStore = useUserTokenStore();

        if (userTokenStore.isAuthenticated) {
          next();
        } else {
          next({ path: '/' });
        }
      },
    },
    {
      path: '/mentors',
      name: 'mentors',
      meta: {
        backgroundColor: 'var(--color-background-white)',
        title: 'Менторы',
      },
      component: () => import('@/pages/mentors/MentorsPage.vue'),
    },
    {
      path: '/mentor',
      name: 'mentor',
      meta: {
        backgroundColor: 'var(--color-background-white)',
        title: 'Ментор',
      },
      component: () => import('@/pages/mentor/MentorPage.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        backgroundColor: 'var(--color-background-white)',
        title: 'Ментор',
      },
      component: () =>
        import('@/pages/mentor-profile/MentorProfilePage.vue'),
      beforeEnter: async (to, from, next) => {
        const userStore = useUserStore();

        if (!userStore.user) {
          await userStore.getUser();
        }

        const loggedInUserId = userStore.user?.mentorUserEntity?.id;
        const profileId = to.query.id;

        if (loggedInUserId && profileId && String(loggedInUserId) === String(profileId)) {
          next();
        } else {
          next({ path: '/' });
        }
      }
    },
    {
      path: '/promo',
      name: 'promo',
      component: () => import('@/pages/promo/PromoPage.vue'),
    },
  ],
});

export default router;
