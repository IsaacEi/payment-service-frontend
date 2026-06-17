import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils";
import type { FC } from "react";

interface Props {
  title?: string;
  description?: string;
  triggerText?: string;
  btnCancelText?: string;
  btnConfirmText?: string;
  disabled?: boolean;
  className?: string;
  handleStatusChange: () => void;
}

export const CustomAlert: FC<Props> = ({ title, description, triggerText, btnCancelText = 'Cancelar', btnConfirmText = 'Confirmar', disabled = false, className, handleStatusChange }) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <button
            className={cn(
                "rounded-xl border px-4 py-2 font-semibold hover:bg-slate-100 disabled:opacity-40",
                className
            )}
             disabled={disabled}
            >
            {triggerText}
            </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
                {description}
            </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
            <AlertDialogCancel>{btnCancelText}</AlertDialogCancel>
            <AlertDialogAction onClick={handleStatusChange}>
                {btnConfirmText}
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}
