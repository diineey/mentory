import { useUserTokenStore } from '@/stores/authStore.js';
import { downloadFile } from '@/shared/utils/functions/download-file.js';

export default function useMainFooter() {
  const { isAuthenticated } = useUserTokenStore();
  
  const downloadAgreement = async () => {
    await downloadFile({
      url: 'agreement/get-public-agreement'
    })
  }
  
  const downloadMentyAgreement = async () => {
    await downloadFile({
      url: 'agreement/get-public-agreement-for-role',
      params: { role: 'MENTY' }
    })
  }
  
  const downloadMentorAgreement = async () => {
    await downloadFile({
      url: 'agreement/get-public-agreement-for-role',
      params: { role: 'MENTOR' }
    })
  }

  return {
    isAuthenticated,
    downloadAgreement,
    downloadMentyAgreement,
    downloadMentorAgreement
  };
}
