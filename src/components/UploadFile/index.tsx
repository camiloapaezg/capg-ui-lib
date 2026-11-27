import { FileUpload } from "@ark-ui/react/file-upload";
import clsx from "clsx";
import type { JSX } from "react";
import React from "react";
import { CloseIcon } from "../../icons/Close/CloseIcon";
import { DocumentIcon } from "../../icons/Document/DocumentIcon";
import { DocumentPdfIcon } from "../../icons/DocumentPDF/DocumentPdfIcon";
import { UploadIcon } from "../../icons/Upload/UploadIcon";
import { VideoIcon } from "../../icons/Video/VideoIcon";
import { Button } from "../Button/Button";
import { ButtonAppearance } from "../Button/types";
import {
  dropZoneClass,
  dropZoneContentClass,
  dropZoneDescriptionClass,
  dropZoneTitleClass,
  filePreviewClass,
  iconPreviewClass,
  iconUploadClass,
  imagePreviewClass,
  itemClass,
  itemCompactClass,
  itemGroupClass,
  itemNameClass,
  itemSizeTextClass,
  labelClass,
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
      <UploadIcon className={iconUploadClass} />
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
        <VideoIcon className={iconPreviewClass} />
      </FileUpload.ItemPreview>
      <FileUpload.ItemPreview
        type="application/pdf"
        className={filePreviewClass}
      >
        <DocumentPdfIcon className={iconPreviewClass} />
      </FileUpload.ItemPreview>
      {showGeneric && (
        <FileUpload.ItemPreview type=".*" className={filePreviewClass}>
          <DocumentIcon className={iconPreviewClass} />
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
      <FileUpload.ItemName className={itemNameClass} title={file.name} />
      {compact !== true && (
        <FileUpload.ItemSizeText className={itemSizeTextClass} />
      )}
      <FileUpload.ItemDeleteTrigger asChild>
        <Button appearance={ButtonAppearance.Ghost} icon={<CloseIcon />} />
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
