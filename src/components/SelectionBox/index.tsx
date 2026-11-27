import { Checkbox } from "@ark-ui/react/checkbox";
import clsx from "clsx";
import { useMemo } from "react";
import type { JSX } from "react/jsx-runtime";
import { CheckmarkIcon } from "../../icons/Checkmark/CheckmarkIcon";
import { LineHorizontalIcon } from "../../icons/LineHorizontal/LineHorizontalIcon";
import {
  controlClass,
  iconClass,
  indicatorClass,
  labelClass,
  rootClass,
} from "./styles.css";

export type SelectionBoxProps = Checkbox.RootProps &
  React.RefAttributes<HTMLLabelElement> & {
    label: string;
  };

export const SelectionBox = ({
  label,
  checked,
  className,
  ...rest
}: SelectionBoxProps) => {
  const Icon: JSX.Element = useMemo(() => {
    if (checked !== "indeterminate") {
      return <CheckmarkIcon className={iconClass} />;
    }

    return <LineHorizontalIcon className={iconClass} />;
  }, [checked]);

  return (
    <Checkbox.Root
      {...rest}
      className={clsx(rootClass, className)}
      checked={checked}
    >
      <Checkbox.Control className={controlClass}>
        <Checkbox.Indicator className={indicatorClass}>
          {Icon}
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label className={labelClass}>{label}</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
