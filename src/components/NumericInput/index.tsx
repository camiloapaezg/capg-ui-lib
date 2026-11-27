import { NumberInput } from "@ark-ui/react/number-input";
import clsx from "clsx";
import { ChevronDownIcon } from "../../icons/ChevronDown/ChevronDownIcon";
import { labelRootClass } from "../../styles/common.css";
import {
  controlClass,
  iconChevronUpClass,
  inputClass,
  rootClass,
  triggerDownClass,
  triggersWrapperClass,
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
      <NumberInput.Label className={labelRootClass}>{label}</NumberInput.Label>
    )}
    <NumberInput.Control className={controlClass}>
      <NumberInput.Input className={inputClass} />
      <div role="presentation" className={triggersWrapperClass}>
        <NumberInput.IncrementTrigger className={triggerUpClass}>
          <ChevronDownIcon className={iconChevronUpClass} />
        </NumberInput.IncrementTrigger>
        <NumberInput.DecrementTrigger className={triggerDownClass}>
          <ChevronDownIcon />
        </NumberInput.DecrementTrigger>
      </div>
    </NumberInput.Control>
  </NumberInput.Root>
);
