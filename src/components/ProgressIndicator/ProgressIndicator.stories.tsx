import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressIndicator } from ".";
import { ProgressIndicatorAppearance } from "./types";

const meta = {
  title: "Components/Progress",
  component: ProgressIndicator,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: {
        type: "select",
        options: Object.keys(ProgressIndicatorAppearance),
      },
    },
    defaultValue: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof ProgressIndicator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ProgressIndicatorStory: Story = {
  args: {
    appearance: ProgressIndicatorAppearance.Circular,
    label: "Progress",
    defaultValue: null,
  },
};
