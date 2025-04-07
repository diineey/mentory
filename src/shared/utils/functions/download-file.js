import { publicApi } from '@/shared/utils/api/axiosInstance';
import { addToast } from '@/shared/utils/notifications';

export const downloadFile = async ({
  url, params = {}, responseType = 'blob', filename
}) => {
  try {
    const response = await publicApi.get(url, {
      params,
      responseType
    });

    const blob = new Blob([ response.data ], {
      type: 'application/pdf'
    });
    const fileUrl = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = fileUrl;

    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(fileUrl);
  } catch (err) {
    const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
    addToast.error(errorMessage);
  }
};
