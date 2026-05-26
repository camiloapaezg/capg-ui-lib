import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import { ButtonAppearance } from "./types";
import "../../styles/stories.css";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        disable: true,
      },
    },
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
      <Icon style={{ fontSize: "20px" }} icon="fluent:save-16-filled"></Icon>
    ),
    disabled: false,
  },
};
