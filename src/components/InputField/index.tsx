import { Field } from "@ark-ui/react";
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { errorTextClass, labelClass, rootClass } from "./styles.css";

export type InputFieldProps = Field.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
    helperText?: string;
    errorText?: string;
  };

export const InputField = ({
  label,
  helperText,
  errorText,
  children,
  className,
  ...rest
}: PropsWithChildren<InputFieldProps>) => {
  return (
    <Field.Root {...rest} className={clsx(rootClass, className)}>
      {label && <Field.Label className={labelClass}>{label}</Field.Label>}
      {children}
      <Field.HelperText>{helperText}</Field.HelperText>
      <Field.ErrorText className={errorTextClass}>{errorText}</Field.ErrorText>
    </Field.Root>
  );
};
