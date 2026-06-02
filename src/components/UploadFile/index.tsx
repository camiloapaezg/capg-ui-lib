import { FileUpload } from "@ark-ui/react/file-upload";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import type { JSX } from "react";
import React from "react";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";
import {
  closeIconClass,
  dropZoneClass,
  dropZoneContentClass,
  dropZoneDescriptionClass,
  dropZoneIconClass,
  dropZoneTitleClass,
  filePreviewClass,
  imagePreviewClass,
  itemClass,
  itemCompactClass,
  itemGroupClass,
  itemNameClass,
  itemSizeTextClass,
  labelClass,
  previewIconClass,
  rootClass,
} from "./styles.css";

type TriggerProps = {
  trigger?: JSX.Element;
  title?: string;
  description?: string;
};

type SelectedFilesProps = FileUpload.ItemProps &
  React.RefAttributes<HTMLLIElement> & {
    compact?: boolean;
  };

type FilePreviewProps = {
  file?: File;
};

export type UploadFileProps = TriggerProps &
  FileUpload.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label?: string;
    compact?: boolean;
  };

const Trigger = ({ trigger, title, description }: TriggerProps) => {
  if (trigger) {
    return <FileUpload.Trigger asChild>{trigger}</FileUpload.Trigger>;
  }

  return (
    <FileUpload.Dropzone className={dropZoneClass}>
      <Icon
        icon="fluent:arrow-upload-32-filled"
        className={dropZoneIconClass}
      />
      <div className={dropZoneContentClass}>
        <span className={dropZoneTitleClass}>
          {title ?? "Drag and drop files here"}
        </span>
        <span className={dropZoneDescriptionClass}>
          {description ?? "or click to browse"}
        </span>
      </div>
    </FileUpload.Dropzone>
  );
};

const FilePreview = ({ file }: FilePreviewProps) => {
  if (!file) {
    return null;
  }

  const showGeneric =
    !file.type.startsWith("image/") &&
    !file.type.startsWith("video/") &&
    file.type !== "application/pdf";

  return (
    <React.Fragment>
      <FileUpload.ItemPreview type="image/*" className={filePreviewClass}>
        <FileUpload.ItemPreviewImage className={imagePreviewClass} />
      </FileUpload.ItemPreview>
      <FileUpload.ItemPreview type="video/*" className={filePreviewClass}>
        <Icon icon="fluent:video-16-regular" className={previewIconClass} />
      </FileUpload.ItemPreview>
      <FileUpload.ItemPreview
        type="application/pdf"
        className={filePreviewClass}
      >
        <Icon
          icon="fluent:document-pdf-16-regular"
          className={previewIconClass}
        />
      </FileUpload.ItemPreview>
      {showGeneric && (
        <FileUpload.ItemPreview type=".*" className={filePreviewClass}>
          <Icon
            icon="fluent:document-16-regular"
            className={previewIconClass}
          />
        </FileUpload.ItemPreview>
      )}
    </React.Fragment>
  );
};

const SelectedFiles = ({ file, compact, ...rest }: SelectedFilesProps) => {
  const className: string = compact === true ? itemCompactClass : itemClass;

  return (
    <FileUpload.Item {...rest} file={file} className={className}>
      {compact !== true && <FilePreview file={file} />}
      <FileUpload.ItemName className={itemNameClass} />
      {compact !== true && (
        <FileUpload.ItemSizeText className={itemSizeTextClass} />
      )}
      <FileUpload.ItemDeleteTrigger asChild>
        <Button
          appearance={ButtonAppearance.Ghost}
          icon={
            <Icon icon="fluent:dismiss-16-regular" className={closeIconClass} />
          }
        />
      </FileUpload.ItemDeleteTrigger>
    </FileUpload.Item>
  );
};

export const UploadFile = ({
  trigger,
  title,
  description,
  label,
  compact,
  className,
  ...rest
}: UploadFileProps) => (
  <FileUpload.Root {...rest} className={clsx(rootClass, className)}>
    {label && (
      <FileUpload.Label className={labelClass}>{label}</FileUpload.Label>
    )}
    <Trigger trigger={trigger} title={title} description={description} />
    <FileUpload.ItemGroup className={itemGroupClass}>
      <FileUpload.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <SelectedFiles key={file.name} file={file} compact={compact} />
          ))
        }
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
