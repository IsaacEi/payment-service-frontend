import type { PaymentStatusCode, Status } from "@/interfaces/payment.interface";
const styles: Record<PaymentStatusCode, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  PROCESSING: "bg-blue-100 text-blue-800",
  PAID: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-red-100 text-red-800",
  CANCELLED: "bg-slate-200 text-slate-700",
};

export const StatusBadge = ({ status } : { status: Status }) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${styles[status.code as PaymentStatusCode]}`}
    >
      {status.name}
    </span>
  );
}
