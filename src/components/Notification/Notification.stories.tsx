import {
  createToaster,
  type CreateToasterReturn,
  type ToastPlacement,
} from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo, useState } from "react";
import { tokens } from "../../main";
import { Button } from "../Button";
import { useTheme } from "../ThemeProvider/useTheme";
import { Notification, type NotificationProps } from "./Notification";
import type { ToastSemanticIcons } from "./types";

type NotificationComponentProps = Omit<
  NotificationProps,
  "toaster" | "icons"
> & {
  placement?: ToastPlacement;
};

const icons: ToastSemanticIcons = {
  success: (
    <Icon
      icon={"fluent:checkmark-circle-16-regular"}
      style={{ color: "inherit", fontSize: "1.2rem" }}
    />
  ),
  error: (
    <Icon
      icon={"fluent:error-circle-16-regular"}
      style={{ color: "inherit", fontSize: "1.2rem" }}
    />
  ),
  warning: (
    <Icon
      icon={"fluent:warning-16-regular"}
      style={{ color: "inherit", fontSize: "1.2rem" }}
    />
  ),
  info: (
    <Icon
      icon={"fluent:info-16-regular"}
      style={{ color: tokens.primary.default, fontSize: "1.2rem" }}
    />
  ),
};

const NotificationComponent = ({
  placement,
  ...rest
}: NotificationComponentProps) => {
  const { className } = useTheme();
  const [currentPlacement, setCurrentPlacement] = useState<
    ToastPlacement | undefined
  >(placement);
  const [toaster, setToaster] = useState<CreateToasterReturn<React.ReactNode>>(
    createToaster({
      overlap: true,
      placement,
      gap: 16,
      duration: Infinity,
    }),
  );

  const buttons = useMemo(
    () => [
      {
        label: "Success",
        onClick: () =>
          toaster.success({
            title: "Success!",
            description: "This is an example of a success notification.",
          }),
      },
      {
        label: "Error",
        onClick: () =>
          toaster.error({
            title: "Error",
            description: "This is an example of an error notification.",
          }),
      },
      {
        label: "Warning",
        onClick: () =>
          toaster.warning({
            title: "Warning",
            description: "This is an example of a warning notification.",
          }),
      },
      {
        label: "Information",
        onClick: () =>
          toaster.info({
            title: "Information",
            description: "This is an example of an information notification.",
          }),
      },
    ],
    [toaster],
  );

  // Re-creates the toaster
  if (placement !== currentPlacement) {
    setToaster(
      createToaster({
        overlap: true,
        placement,
        gap: 16,
        duration: Infinity,
      }),
    );
    setCurrentPlacement(placement);
  }

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {buttons.map(({ label, onClick }) => (
          <Button
            key={`button-${label}`}
            appearance={"Outline"}
            label={label}
            onClick={onClick}
          />
        ))}
      </div>
      <Notification
        {...rest}
        key={`toaster-${placement}`}
        toaster={toaster}
        icons={icons}
        rootProps={{ className }}
      />
    </React.Fragment>
  );
};

const meta = {
  title: "Components/Notification",
  component: NotificationComponent,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      options: [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end",
      ],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof NotificationComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const NotificationStory: Story = {
  args: {
    placement: "top",
  },
};
