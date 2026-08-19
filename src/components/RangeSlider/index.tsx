import { Slider } from "@ark-ui/react/slider";
import clsx from "clsx";
import {
  contentHorizontalClass,
  contentVerticalClass,
  controlClass,
  headerHorizontalClass,
  headerVerticalClass,
  labelClass,
  markerClass,
  markerGroupClass,
  rangeClass,
  rootClass,
  thumbClass,
  trackClass,
  valueTextClass,
} from "./styles.css";
import { useMemo } from "react";

export type RangeSliderProps = Slider.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
    marks?: number[];
  };

export const RangeSlider = ({
  label,
  marks,
  orientation,
  className,
  defaultValue,
  ...rest
}: RangeSliderProps) => {
  const isRange: boolean = useMemo(
    () => (defaultValue && defaultValue.length == 2 ? true : false),
    [defaultValue],
  );

  const headerClass =
    orientation === "vertical" ? headerVerticalClass : headerHorizontalClass;

  const contentClass =
    orientation === "vertical" ? contentVerticalClass : contentHorizontalClass;
  return (
    <Slider.Root
      {...rest}
      orientation={orientation}
      className={clsx(rootClass, className)}
      defaultValue={defaultValue}
    >
      <div className={headerClass}>
        {label && <Slider.Label className={labelClass}>{label}</Slider.Label>}
        <Slider.ValueText className={valueTextClass} />
      </div>
      <div className={contentClass}>
        <Slider.Control className={controlClass}>
          <Slider.Track className={trackClass}>
            <Slider.Range className={rangeClass} />
          </Slider.Track>
          <Slider.Thumb index={0} className={thumbClass}>
            <Slider.HiddenInput />
          </Slider.Thumb>
          {isRange === true && (
            <Slider.Thumb index={1} className={thumbClass}>
              <Slider.HiddenInput />
            </Slider.Thumb>
          )}
        </Slider.Control>
        {marks && marks.length > 0 && (
          <Slider.MarkerGroup className={markerGroupClass}>
            {marks.map((value) => (
              <Slider.Marker key={value} value={value} className={markerClass}>
                {value}
              </Slider.Marker>
            ))}
          </Slider.MarkerGroup>
        )}
      </div>
    </Slider.Root>
  );
};
