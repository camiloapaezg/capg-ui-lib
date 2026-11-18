import { Progress } from "@ark-ui/react";
import clsx from "clsx";
import { labelBaseClass } from "../../styles/common.css";
import {
  circleClass,
  circleContainerClass,
  circleRangeClass,
  circleRootClass,
  circleTextClass,
  circleTrackClass,
  linearRangeClass,
  linearRootClass,
  linearTextClass,
  linearTrackClass,
} from "./styles.css";
import type { ProgressIndicatorAppearance } from "./types";

export type ProgressIndicatorProps = Progress.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    appearance: keyof typeof ProgressIndicatorAppearance;
    label?: string;
  };

export type ProgressProps = Omit<ProgressIndicatorProps, "appearance">;

const ProgressCircular = ({ label, className, ...rest }: ProgressProps) => {
  return (
    <Progress.Root {...rest} className={clsx(circleRootClass, className)}>
      {label && (
        <Progress.Label className={labelBaseClass}>{label}</Progress.Label>
      )}
      <div className={circleContainerClass}>
        <Progress.Circle className={circleClass}>
          <Progress.CircleTrack className={circleTrackClass} />
          <Progress.CircleRange className={circleRangeClass} />
        </Progress.Circle>
        <Progress.ValueText className={circleTextClass} />
      </div>
    </Progress.Root>
  );
};

const ProgressLinear = ({ label, className, ...rest }: ProgressProps) => {
  return (
    <Progress.Root {...rest} className={clsx(linearRootClass, className)}>
      {label && (
        <Progress.Label className={labelBaseClass}>{label}</Progress.Label>
      )}
      <Progress.ValueText className={linearTextClass} />
      <Progress.Track className={linearTrackClass}>
        <Progress.Range className={linearRangeClass} />
      </Progress.Track>
    </Progress.Root>
  );
};

export const ProgressIndicator = ({
  appearance,
  ...rest
}: ProgressIndicatorProps) => {
  switch (appearance) {
    case "Linear":
      return <ProgressLinear {...rest} />;
    default:
    case "Circular":
      return <ProgressCircular {...rest} />;
  }
};
