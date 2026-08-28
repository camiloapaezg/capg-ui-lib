import { Switch } from "@ark-ui/react";
import clsx from "clsx";
import { controlClass, rootClass, thumbClass } from "./styles.css";

export type ToggleProps = Switch.RootProps &
  React.RefAttributes<HTMLLabelElement> & {
    label?: string;
  };

export const Toggle = ({ label, className, ...rest }: ToggleProps) => {
  return (
    <Switch.Root {...rest} className={clsx(rootClass, className)}>
      <Switch.Control className={controlClass}>
        <Switch.Thumb className={thumbClass} />
      </Switch.Control>
      {label && <Switch.Label>{label}</Switch.Label>}
      <Switch.HiddenInput />
    </Switch.Root>
  );
};
