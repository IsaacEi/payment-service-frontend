import { paymentApi } from '@/api/payment.api';
import type { PaymentCreate, Payment } from '@/interfaces/payment.interface';
export const createPaymentAction = async (payload: PaymentCreate): Promise<Payment> => {
  const { data } = await paymentApi.post<Payment>('/payments', payload);
  return data;
};
