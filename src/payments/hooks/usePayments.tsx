import { useQuery } from "@tanstack/react-query";
import { getPaymentsAction } from "@/payments/actions/get-payments.action";

export const usePayments = () => {
    return useQuery({
        queryKey: ['payments'],
        queryFn: () => getPaymentsAction(),
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
}