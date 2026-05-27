import { Field } from "@ark-ui/react";
import clsx from "clsx";
import { InputField, type InputFieldProps } from "../InputField";
import { textInputClass } from "./styles.css";

export type TextInputProps = Omit<
  Field.InputProps & React.RefAttributes<HTMLInputElement>,
  "onChange"
> & {
  fieldProps: InputFieldProps;
  onValueChange?: (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
    newValue?: string,
  ) => void;
};

export const TextInput = ({
  onValueChange,
  fieldProps,
  className,
  ...rest
}: TextInputProps) => {
  return (
    <InputField {...fieldProps}>
      <Field.Input
        {...rest}
        onChange={(ev) => onValueChange?.(ev, ev.target.value)}
        className={clsx(textInputClass, className)}
      />
    </InputField>
  );
};
