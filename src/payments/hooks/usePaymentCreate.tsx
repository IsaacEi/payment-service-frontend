import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPaymentAction } from "@/payments/actions/create-payment.action";

export const usePaymentCreate = () => {

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createPaymentAction,
        onSuccess: (payment) => {
            queryClient.invalidateQueries({ queryKey: ["payments"] });
            queryClient.invalidateQueries({ queryKey: ['payment-by-id', payment.id]});
            // Update the specific payment query data
            queryClient.setQueryData(['payments', payment.id], payment);
        }
    });

    return {
        mutation
    }

}