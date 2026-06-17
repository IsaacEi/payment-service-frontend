import { paymentApi } from '@/api/payment.api';
import type { Payment } from '@/interfaces/payment.interface';
export const getPaymentByIdAction = async (id: string): Promise<Payment> => {
  const { data } = await paymentApi.get<Payment>(`/payments/${id}`);
  return data;
};
