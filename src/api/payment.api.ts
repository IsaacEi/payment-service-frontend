import axios, { AxiosError, type AxiosResponse } from 'axios';
import { baseURL } from '@/api/config';
const paymentApi  =  axios.create({ baseURL });

//Success conection interceptor
const success: (response: AxiosResponse) => any = (response: AxiosResponse) =>
  response;
//Failed conection interceptor
const error: (error: AxiosError) => Promise<never> = async (
  error: AxiosError
) => {
  try {
    const { message }: any = error.response?.data;
    const errorObject: any = error.response?.data;
    const code: number | undefined = error.response?.status;
    const status: string | undefined = error.response?.statusText;

    return Promise.reject({
      status,
      message,
      code,
      errorObject,
    });
  } catch (err) {
    const errorDefault = {
      status: "error",
      message:
        "There is an error while trying to make the request, please try again later.",
      code: 500,
      errorObject: {},
    };
    return Promise.reject(errorDefault);
  }
};

paymentApi.interceptors.response.use(success, error);

export { paymentApi };
