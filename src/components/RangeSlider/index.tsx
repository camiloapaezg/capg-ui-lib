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

export type RangeSliderProps = Slider.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
    range?: boolean;
    marks?: number[];
  };

export const RangeSlider = ({
  label,
  range,
  marks,
  orientation,
  className,
  ...rest
}: RangeSliderProps) => {
  const headerClass =
    orientation === "vertical" ? headerVerticalClass : headerHorizontalClass;

  const contentClass =
    orientation === "vertical" ? contentVerticalClass : contentHorizontalClass;
  return (
    <Slider.Root
      {...rest}
      orientation={orientation}
      className={clsx(rootClass, className)}
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
          {range === true && (
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
