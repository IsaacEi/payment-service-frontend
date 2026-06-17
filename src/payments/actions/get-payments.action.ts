import { paymentApi } from '@/api/payment.api';
import type { PaymentsResponse } from '@/interfaces/payment.interface';
export const getPaymentsAction = async (): Promise<PaymentsResponse> => {
  const { data } = await paymentApi.get<PaymentsResponse>('/payments');
  return data;
};
