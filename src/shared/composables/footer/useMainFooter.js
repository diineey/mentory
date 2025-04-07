import { useUserTokenStore } from '@/stores/authStore';
import { downloadFile } from '@/shared/utils/functions/download-file';

export default function useMainFooter() {
  const {
    isAuthenticated
  } = useUserTokenStore();

  const downloadAgreement = async () => {
    await downloadFile({
      url: 'agreement/get-public-agreement',
      filename: 'public-agreement.pdf'
    });
  };

  const downloadMentyAgreement = async () => {
    await downloadFile({
      url: 'agreement/get-public-agreement-for-role',
      params: {
        role: 'MENTY'
      },
      filename: 'menty-agreement.pdf',
    });
  };

  const downloadMentorAgreement = async () => {
    await downloadFile({
      url: 'agreement/get-public-agreement-for-role',
      params: {
        role: 'MENTOR'
      },
      filename: 'mentor-agreement.pdf'
    });
  };

  return {
    isAuthenticated,
    downloadAgreement,
    downloadMentyAgreement,
    downloadMentorAgreement
  };
}
