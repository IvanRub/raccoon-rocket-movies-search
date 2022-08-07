import { AxiosRequestConfig } from 'axios';

import { axiosProvider } from './interceptor';

/**
 * Компонент обработки результатов запросов
 * @param config 
 * @returns 
 */
export const HttpTransport = async <T>(
  config: AxiosRequestConfig
): Promise<T> => {
  const result = await axiosProvider(config);

  const response = result.data;

  return response;
};
