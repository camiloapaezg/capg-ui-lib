import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ContextMenu, type ContextMenuProps } from ".";
import type { ContextMenuItem } from "./types";
import { Button } from "../Button";

type ContextMenuStatefulProps = Omit<ContextMenuProps, "items">;

const ContextMenuStateful = ({ ...rest }: ContextMenuStatefulProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const menuItems: ContextMenuItem[] = [
    {
      group: "Buttons",
      category: "button",
      value: "cut",
      text: "Cut",
    },
    {
      group: "Buttons",
      category: "button",
      disabled: true,
      value: "copy",
      text: "Copy",
    },
    {
      group: "Buttons",
      category: "button",
      value: "paste",
      text: "Paste",
    },
    {
      group: "Selection",
      category: "checkbox",
      checked: checked,
      value: "select-all",
      text: "Select All",
      onCheckedChange: setChecked,
    },
    {
      group: "Custom",
      category: "custom",
      value: "custom-item",
      onRenderItem: () => (
        <Button
          role="menuitem"
          appearance={"Primary"}
          label="I am a button"
          style={{ width: "100%" }}
        />
      ),
    },
  ];

  return <ContextMenu {...rest} items={menuItems} />;
};

const meta = {
  title: "Components/Context Menu",
  component: ContextMenuStateful,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: {
        disable: true,
      },
    },
    customTrigger: {
      control: {
        disable: true,
      },
    },
    asStandardMenu: {
      control: {
        disable: true,
      },
    },
    contentProps: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ContextMenuStateful>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateSelectorStory: Story = {
  args: {
    trigger: (
      <div
        style={{
          width: "100%",
          height: "25rem",
          background: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 600 }}>{"Right click in this area"}</span>
      </div>
    ),
  },
};
