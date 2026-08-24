import { QrCode } from "@ark-ui/react";
import clsx from "clsx";
import {
  frameClass,
  imageClass,
  overlayClass,
  patternClass,
  rootClass,
} from "./styles.css";

export type QRCodeProps = QrCode.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    overlayProps?: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >;
  };

export const QRCode = ({ overlayProps, className, ...rest }: QRCodeProps) => {
  return (
    <QrCode.Root {...rest} className={clsx(rootClass, className)}>
      <QrCode.Frame className={frameClass}>
        <QrCode.Pattern className={patternClass} />
      </QrCode.Frame>
      {overlayProps && (
        <QrCode.Overlay className={overlayClass}>
          <img
            {...overlayProps}
            className={clsx(imageClass, overlayProps?.className)}
          />
        </QrCode.Overlay>
      )}
    </QrCode.Root>
  );
};
