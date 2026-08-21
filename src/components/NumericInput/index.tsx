import { NumberInput } from "@ark-ui/react/number-input";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import { iconBaseClass, labelBaseClass } from "../../styles/common.css";
import {
  controlClass,
  inputClass,
  rootClass,
  triggerClass,
  triggerGroupClass,
  triggerUpClass,
} from "./styles.css";

export type NumericInputProps = NumberInput.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
  };

export const NumericInput = ({
  label,
  className,
  ...rest
}: NumericInputProps) => (
  <NumberInput.Root {...rest} className={clsx(rootClass, className)}>
    {label && (
      <NumberInput.Label className={labelBaseClass}>{label}</NumberInput.Label>
    )}
    <NumberInput.Control className={controlClass}>
      <NumberInput.Input className={inputClass} />
      <div className={triggerGroupClass}>
        <NumberInput.IncrementTrigger className={triggerUpClass}>
          <Icon icon="fluent:chevron-up-16-regular" className={iconBaseClass} />
        </NumberInput.IncrementTrigger>
        <NumberInput.DecrementTrigger className={triggerClass}>
          <Icon
            icon="fluent:chevron-down-16-regular"
            className={iconBaseClass}
          />
        </NumberInput.DecrementTrigger>
      </div>
    </NumberInput.Control>
  </NumberInput.Root>
);
