import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PaymentCreate } from "@/interfaces/payment.interface";
import type { FC } from "react";

interface Props {
  onSubmit: (data: PaymentCreate) => void;
  isPending: boolean;
}

export const PaymentForm: FC<Props> = ({ onSubmit, isPending }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentCreate>({
    defaultValues: {
      concept: "",
      productQuantity: 1,
      payer: "",
      payee: "",
      totalAmount: 0,
    },
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 md:grid-cols-2"
    >
      <label className="md:col-span-2">
        Concepto
        <Input {...register("concept", { required: "Requerido" })} />
        {errors.concept && (
          <small className="text-red-600">{errors.concept.message}</small>
        )}
      </label>
      <label>
        Cantidad de productos
        <Input
          type="number"
          {...register("productQuantity", {
            valueAsNumber: true,
            min: 1,
            required: true,
          })}
        />
      </label>
      <label>
        Monto total
        <Input
          type="number"
          step="0.01"
          {...register("totalAmount", {
            valueAsNumber: true,
            min: 1,
            required: true,
          })}
        />
      </label>
      <label>
        Quién realiza el pago
        <Input {...register("payee", { required: true })} />
      </label>
      <label>
        A quién se le paga
        <Input {...register("payer", { required: true })} />
      </label>
      <div className="md:col-span-2">
        <Button disabled={isPending}>
          {isPending ? "Guardando..." : "Crear pago"}
        </Button>
      </div>
    </form>
  );
};
