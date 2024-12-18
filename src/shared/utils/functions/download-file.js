import { publicApi } from '@/shared/utils/api/axiosInstance.js';
import { addToast } from '@/shared/utils/notifications.js';

export const downloadFile = async ({ url, params = {}, responseType = 'blob' }) => {
  try {
    const response = await publicApi.get(url, {
      params,
      responseType
    });
    
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const fileUrl = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = fileUrl;
    
    const contentDisposition = response.headers['content-disposition'];
    
    a.download = contentDisposition
      ? contentDisposition.split('filename=')[1]?.replace(/"/g, '')
      : '';
    a.click();
    
    window.URL.revokeObjectURL(fileUrl);
  } catch (err) {
    const errorMessage = err.response?.data?.errorMessage || 'Internal server error';
    addToast.error(errorMessage);
  }
};
