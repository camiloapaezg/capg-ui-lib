import { PasswordInput } from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import {
  controlClass,
  iconClass,
  indicatorClass,
  inputClass,
  labelClass,
  rootClass,
  visibilityTriggerClass,
} from "./styles.css";

export type ProtectedInputProps = PasswordInput.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
  };

export const ProtectedInput = ({
  label,
  className,
  ...rest
}: ProtectedInputProps) => {
  return (
    <PasswordInput.Root {...rest} className={clsx(rootClass, className)}>
      {label && (
        <PasswordInput.Label className={labelClass}>
          {label}
        </PasswordInput.Label>
      )}
      <PasswordInput.Control className={controlClass}>
        <PasswordInput.Input className={inputClass} />
        <PasswordInput.VisibilityTrigger className={visibilityTriggerClass}>
          <PasswordInput.Indicator
            className={indicatorClass}
            fallback={
              <Icon icon="fluent:eye-off-16-regular" className={iconClass} />
            }
          >
            <Icon icon="fluent:eye-16-regular" className={iconClass} />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
};
