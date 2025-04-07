import {
  onBeforeUnmount, onMounted, ref
} from 'vue';

export default function useIsMobile() {
  const isMobile = ref(false);
  const isMobileForSteps = ref(false);

  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
    isMobileForSteps.value = window.innerWidth <= 1024;
  };

  onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile);
  });

  return {
    isMobile,
    isMobileForSteps
  };
}