import { PaymentLayaout } from '@/payments/layouts/PaymentLayaout';
import { HomePage } from '@/payments/pages/home/HomePage';
import { PaymentPage } from '@/payments/pages/payment/PaymentPage';
import { PaymentCreatePage } from '@/payments/pages/paymentCreate/PaymentCreatePage';

export const paymentRouter = { 
    path: "/",
    element: <PaymentLayaout />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },
        {
            path: "payment/:id",
            element: <PaymentPage />,
        },
        {
            path: "payment/create",
            element: <PaymentCreatePage />,
        },
    ]
};