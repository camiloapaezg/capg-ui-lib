import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from ".";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;
export const ToggleStory: Story = {
  args: {
    label: "Is checked",
  },
};
