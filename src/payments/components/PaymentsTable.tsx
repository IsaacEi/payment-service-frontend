import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { Payment } from '@/interfaces/payment.interface';
import { currencyFormatter } from '@/lib/currency-formatter';
import { EyeIcon } from 'lucide-react'
import { type FC } from 'react'
import { Link } from 'react-router'
import { StatusBadge } from './StatusBadge';

interface Props {
  payments: Payment[];
}

export const PaymentsTable: FC<Props> = ({ payments }) => {
    return (
        <Table className="bg-white p-10 shadow-md border border-gray-200 mb-10 mt-10 rounded-2xl">
            <TableHeader>
                <TableRow>
                    <TableHead>Concepto</TableHead>
                    <TableHead>Cantidad de productos</TableHead>
                    <TableHead>Quien Paga</TableHead>
                    <TableHead>Aquien se Paga</TableHead>
                    <TableHead>Importe</TableHead>
                    <TableHead>Estatus</TableHead>
                    <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {payments.map(payment => (
                    <TableRow key={payment.id}>
                        
                        <TableCell>{payment.concept}</TableCell>
                        <TableCell>{payment.productQuantity}</TableCell>
                        <TableCell>{payment.payee}</TableCell>
                        <TableCell>{payment.payer}</TableCell>
                        <TableCell>{currencyFormatter(payment.totalAmount,'es-ES','MXN')}</TableCell>
                        <TableCell><StatusBadge status={payment.status} /></TableCell>
                        <TableCell>
                            <div className='flex items-center justify-center gap-4'>
                                <Link to={`/payment/${payment.id}`}>
                                    <EyeIcon size={18} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
