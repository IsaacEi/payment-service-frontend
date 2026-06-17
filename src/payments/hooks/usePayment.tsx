import { useQuery } from "@tanstack/react-query";
import { getPaymentByIdAction } from "@/payments/actions/get-payment-by-id.action";

export const usePaymentById = (id: string) => {
    return useQuery({
        queryKey: ['payment-by-id', id],
        queryFn: () => getPaymentByIdAction(id),
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
}