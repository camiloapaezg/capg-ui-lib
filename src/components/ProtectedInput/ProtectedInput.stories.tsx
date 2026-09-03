import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProtectedInput } from ".";

const meta = {
  title: "Components/Protected Input",
  component: ProtectedInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProtectedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProtectedInputStory: Story = {
  args: {
    label: "Password",
    disabled: false,
  },
};
