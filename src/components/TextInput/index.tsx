import { Field } from "@ark-ui/react";
import clsx from "clsx";
import { textInputClass } from "./styles.css";

export type TextInputProps = Omit<
  Field.InputProps & React.RefAttributes<HTMLInputElement>,
  "onChange"
> & {
  onValueChange?: (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
    newValue?: string,
  ) => void;
};

export const TextInput = ({
  onValueChange,
  className,
  ...rest
}: TextInputProps) => {
  return (
    <Field.Input
      {...rest}
      onChange={(ev) => onValueChange?.(ev, ev.target.value)}
      className={clsx(textInputClass, className)}
    />
  );
};
