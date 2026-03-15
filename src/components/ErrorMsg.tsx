import { AlertCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  country?: string;
  expertise?: string;
  message?: string;
  file?: string;
}

type ErrorMsgProps = {
  field: keyof FormErrors;
  errors: FormErrors;
  touched: Partial<Record<keyof FormErrors, boolean>>;
};

export const ErrorMsg = ({ field, errors, touched }: ErrorMsgProps) =>
  errors[field] && touched[field] ? (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
      <AlertCircle className="h-3 w-3" /> {errors[field]}
    </p>
  ) : null;
