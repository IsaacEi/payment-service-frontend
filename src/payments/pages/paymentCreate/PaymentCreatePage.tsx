import type { PaymentCreate } from '@/interfaces/payment.interface';
import { PaymentForm } from '@/payments/components/PaymentForm'
import { usePaymentCreate } from '@/payments/hooks/usePaymentCreate';
import { type FC } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
export const PaymentCreatePage: FC = () => {
  const navigate = useNavigate();
  const { mutation } = usePaymentCreate();

  const handleSubmitPayment = async (paymentCreate: PaymentCreate) => {
    await mutation.mutateAsync(paymentCreate, {
      onSuccess: (data) => {
        toast.success(`Pago creado con éxito`, {
          duration: 4000,
          position: 'top-right',
          className: "bg-green-600 text-white border border-zinc-700 shadow-xl",
        });
        navigate(`/payments/${data.id}`, { replace: true });
      },

      onError: (_) => {
        toast.error('Error al guardar el pago', {
          duration: 4000,
          position: 'top-right',
          className: "bg-red-600 text-white border border-zinc-700 shadow-xl",
        });
      }
    });
  };

  return (
    <>
      <main className="container-page">
      <section className="card p-8">
        <h1 className="mb-6 text-3xl font-black">Alta de pago</h1>
        <PaymentForm onSubmit={handleSubmitPayment} isPending={mutation.isPending} />
      </section>
    </main>
    </>
  )
}
