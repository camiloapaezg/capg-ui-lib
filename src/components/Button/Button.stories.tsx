import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import { ButtonAppearance } from "./types";
import { Icon } from "@iconify-icon/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: {
        type: "select",
        options: Object.keys(ButtonAppearance),
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: {
    label: "Save changes",
    appearance: ButtonAppearance.Primary,
    icon: (
      <Icon style={{ fontSize: "18px" }} icon="fluent:save-16-filled"></Icon>
    ),
  },
};
