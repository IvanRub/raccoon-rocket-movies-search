import axios from 'axios';
import qs from 'qs';

/**
 * Настройка axios
 */

const { REACT_APP_API_URL, REACT_APP_API_TOKEN } = process.env;

export const axiosProvider = axios.create({
    baseURL: REACT_APP_API_URL,
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
 });

 axiosProvider.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        token: REACT_APP_API_TOKEN,
    };
  
    return config;
  });

 axiosProvider.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );