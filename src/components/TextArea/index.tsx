import { Field } from "@ark-ui/react";
import { InputField, type InputFieldProps } from "../InputField";
import clsx from "clsx";
import { textAreaClass } from "./styles.css";

export type TextAreaProps = Omit<
  Field.TextareaProps & React.RefAttributes<HTMLTextAreaElement>,
  "onChange"
> & {
  fieldProps: InputFieldProps;
  onValueChange?: (
    ev: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
    newValue?: string,
  ) => void;
};

export const TextArea = ({
  fieldProps,
  onValueChange,
  className,
  ...rest
}: TextAreaProps) => {
  return (
    <InputField {...fieldProps}>
      <Field.Textarea
        {...rest}
        onChange={(ev) => onValueChange?.(ev, ev.target.value)}
        className={clsx(textAreaClass, className)}
      />
    </InputField>
  );
};
