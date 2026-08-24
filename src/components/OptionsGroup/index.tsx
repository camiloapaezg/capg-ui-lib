import { RadioGroup } from "@ark-ui/react";
import clsx from "clsx";
import {
  itemClass,
  itemControlClass,
  itemTextClass,
  labelClass,
  rootClass,
} from "./styles.css";
import type { OptionsGroupItem } from "./types";

export type OptionsGroupProps = RadioGroup.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    items: OptionsGroupItem[];
    label?: string;
  };

export const OptionsGroup = ({
  items,
  label,
  className,
  ...rest
}: OptionsGroupProps) => {
  return (
    <RadioGroup.Root {...rest} className={clsx(rootClass, className)}>
      {label && (
        <RadioGroup.Label className={labelClass}>{label}</RadioGroup.Label>
      )}
      {items.map(({ value, text, ...itemProps }) => (
        <RadioGroup.Item
          {...itemProps}
          className={itemClass}
          key={value}
          value={value}
        >
          <RadioGroup.ItemControl className={itemControlClass} />
          <RadioGroup.ItemText className={itemTextClass}>
            {text}
          </RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
