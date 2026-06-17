
import { CustomAlert } from '@/components/customs/CustomAlert';
import { CustomFullScreenLoading } from '@/components/customs/CustomFullScreenLoading';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card';
import { PAYMENT_STATUS_CODE, type PaymentStatusCode, type PaymentStatusUpdate } from '@/interfaces/payment.interface';
import { currencyFormatter } from '@/lib/currency-formatter';
import { CustomJumbotron } from '@/payments/components/CustomJumbotron';
import { StatusBadge } from '@/payments/components/StatusBadge';
import { usePaymentDetail } from '@/payments/hooks/usePaymentDetail';
import { Undo2Icon } from 'lucide-react';
import { type FC } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';

export const PaymentPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data: payment, mutation, error } = usePaymentDetail(id || '');

  const handleStatusChange = async (status: PaymentStatusCode) => {
    const stusUpdate: PaymentStatusUpdate = { statusCode: status };
    await mutation.mutateAsync(stusUpdate, {
      onSuccess: (data) => {
        toast.success(`Pago actualizado con éxito`, {
          duration: 4000,
          position: 'top-right',
          className: "bg-green-600 text-white border border-zinc-700 shadow-xl",
        });
        navigate(`/payments/${data.id}`, { replace: true });
      },

      onError: (_) => {
        toast.error('Error al actualizar el pago', {
          duration: 4000,
          position: 'top-right',
          className: "bg-red-600 text-white border border-zinc-700 shadow-xl",
        });
      }
    });
  }

  if (isLoading) return <CustomFullScreenLoading />;

  if (error || !payment)
    return (
      <main className="container-page">
        <div className="card p-8 text-red-600">No se encontró el pago.</div>
      </main>
  );

  return (
    <main className="container-page">
      <section>
        <CustomJumbotron 
          title="Detalle del pago"
          subTitle="Aquí puedes ver la información detallada del pago seleccionado, así como cambiar su estatus si es necesario."
        />
        <Card>
          <CardHeader>
            <CardAction>
              <Link 
                to="/payments" 
              >
                <Button>
                  <Undo2Icon /> Regresar
                </Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent className="card p-8 space-y-6">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500">ID: {payment.id}</p>
                <h1 className="text-3xl font-black">Concepto: {payment.concept}</h1>
              </div>
              <StatusBadge status={payment.status} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <p>
                <b>Pagador:</b> {payment.payee}
              </p>
              <p>
                <b>Beneficiario:</b> {payment.payer}
              </p>
              <p>
                <b>Cantidad productos:</b> {payment.productQuantity}
              </p>
              <p>
                <b>Monto:</b> {currencyFormatter(payment.totalAmount,'es-ES','MXN')}
              </p>
            </div>
            <div className="border-t pt-6">
              <h2 className="mb-3 text-xl font-bold">Cambiar estatus</h2>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_STATUS_CODE.map(({ code, name }) => (
                  <CustomAlert
                    key={code}
                    title="Confirmar cambio de estatus"
                    description={`¿Deseas cambiar el estatus del pago a ${name}?`}
                    triggerText={name}
                    disabled={
                      mutation.isPending ||
                      code === payment.status.code ||
                      payment.status.code === "PAID"
                    }
                    handleStatusChange={() =>
                      handleStatusChange(code as PaymentStatusCode)
                    }
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-500">
                El backend debe publicar el evento en RabbitMQ al actualizar el
                estatus.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
