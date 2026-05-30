import { Field } from "@ark-ui/react";
import clsx from "clsx";
import { textAreaClass } from "./styles.css";

export type TextAreaProps = Omit<
  Field.TextareaProps & React.RefAttributes<HTMLTextAreaElement>,
  "onChange"
> & {
  onValueChange?: (
    ev: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
    newValue?: string,
  ) => void;
};

export const TextArea = ({
  onValueChange,
  className,
  ...rest
}: TextAreaProps) => {
  return (
    <Field.Textarea
      {...rest}
      onChange={(ev) => onValueChange?.(ev, ev.target.value)}
      className={clsx(textAreaClass, className)}
    />
  );
};
