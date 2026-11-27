import { PasswordInput } from "@ark-ui/react";
import clsx from "clsx";
import { EyeIcon } from "../../icons/Eye/EyeIcon";
import { EyeOffIcon } from "../../icons/EyeOff/EyeOffIcon";
import { labelRootClass } from "../../styles/common.css";
import {
  controlClass,
  indicatorClass,
  inputClass,
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
        <PasswordInput.Label className={labelRootClass}>
          {label}
        </PasswordInput.Label>
      )}
      <PasswordInput.Control className={controlClass}>
        <PasswordInput.Input className={inputClass} />
        <PasswordInput.VisibilityTrigger className={visibilityTriggerClass}>
          <PasswordInput.Indicator
            className={indicatorClass}
            fallback={<EyeOffIcon />}
          >
            <EyeIcon />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
};
