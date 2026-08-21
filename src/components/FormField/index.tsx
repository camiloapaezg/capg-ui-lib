import { Field } from "@ark-ui/react";
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { labelBaseClass } from "../../styles/common.css";
import { errorTextClass, rootClass } from "./styles.css";

export type InputFieldProps = Field.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
    helperText?: string;
    errorText?: string;
  };

export const FormField = ({
  label,
  helperText,
  errorText,
  children,
  className,
  ...rest
}: PropsWithChildren<InputFieldProps>) => {
  return (
    <Field.Root {...rest} className={clsx(rootClass, className)}>
      {label && <Field.Label className={labelBaseClass}>{label}</Field.Label>}
      {children}
      <Field.HelperText>{helperText}</Field.HelperText>
      <Field.ErrorText className={errorTextClass}>{errorText}</Field.ErrorText>
    </Field.Root>
  );
};
