import axios from 'axios';

const BASE_URL = 'http://localhost:6060';

const VALID_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

const apiRequest = (
  endpoint,
  method = 'GET',
  data = null,
  params = {}
) => {
  if (!VALID_METHODS.includes(method)) {
    throw new Error(
      `Invalid HTTP method: ${method}. Valid methods are: ${VALID_METHODS.join(', ')}`
    );
  }

  const config = {
    method,
    url: `${BASE_URL}/${endpoint}`,
    data,
    params,
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error('API request error:', error);
      throw error;
    });
};
