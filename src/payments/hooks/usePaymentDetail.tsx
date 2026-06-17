import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getPaymentByIdAction } from '@/payments/actions/get-payment-by-id.action';
import { updatePaymentStatusAction } from "@/payments/actions/update-payment-status.action";
import type { PaymentStatusUpdate } from "@/interfaces/payment.interface";


export const usePaymentDetail = (id: string) => {

  const queryClient = useQueryClient();
    
  const query = useQuery({
    queryKey: ['payment-by-id', id],
    queryFn: () => getPaymentByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationKey: ['payment-status-update', id],
    mutationFn: (status: PaymentStatusUpdate) => updatePaymentStatusAction(id!, status),
    onSuccess: (payment) => {
      // Invalidate payments list to refetch updated data
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['payment-by-id', payment.id]});
      // Update the specific payment query data
      queryClient.setQueryData(['payments', payment.id], payment);
    }
  });

  return {
    ...query,
    mutation,
  }
}
