import { Checkbox } from "@ark-ui/react/checkbox";
import { Icon } from "@iconify-icon/react";
import {
  controlClass,
  iconClass,
  indicatorClass,
  labelClass,
  rootClass,
} from "./styles.css";
import clsx from "clsx";

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
  return (
    <Checkbox.Root
      {...rest}
      className={clsx(rootClass, className)}
      checked={checked}
    >
      <Checkbox.Control className={controlClass}>
        <Checkbox.Indicator className={indicatorClass}>
          <Icon
            icon={
              checked !== "indeterminate"
                ? "fluent:checkmark-16-filled"
                : "fluent:line-horizontal-1-16-filled"
            }
            className={iconClass}
          />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label className={labelClass}>{label}</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
