import { paymentApi } from '@/api/payment.api';
import type { Payment, PaymentStatusUpdate } from '@/interfaces/payment.interface';
export const updatePaymentStatusAction = async (id:string, status: PaymentStatusUpdate): Promise<Payment> => {
  const { data } = await paymentApi.patch<Payment>(`/payments/${id}/status`, status);
  return data;
};
