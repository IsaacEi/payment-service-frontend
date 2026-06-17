import { type FC } from 'react'
import { CustomJumbotron } from '@/payments/components/CustomJumbotron'
import { usePayments } from '@/payments/hooks/usePayments';
import { PaymentsTable } from '@/payments/components/PaymentsTable';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { CustomPagination } from '@/components/customs/CustomPagination';

export const HomePage: FC = () => {
  const { data } = usePayments();
  
  return (
    <>
      <div className="flex items-center justify-between">
        <CustomJumbotron 
          title="Lista de pagos"
        />

        <div className="flex justify-end gap-4">
          <Link 
            to="payment/create" 
          >
            <Button>
              <PlusIcon /> Nuevo pago
            </Button>
          </Link>
        </div>
      </div>

      <PaymentsTable payments={data?.content || []} />

      <CustomPagination totalPages={data?.totalPages || 0} />
    </>
  )
}
