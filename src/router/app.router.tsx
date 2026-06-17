import { createBrowserRouter/* , createHashRouter */ } from "react-router";
import { paymentRouter } from "@/payments/router/payment.router";
import { Navigate } from "react-router";

/* export const appRouter = createHashRouter([ */
export const appRouter = createBrowserRouter([
   paymentRouter,
   {
        path: "*",
        element: <Navigate to="/" />,
    },
]);