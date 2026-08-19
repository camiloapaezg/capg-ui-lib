import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumericInput } from ".";

const meta = {
  title: "Components/Numeric Input",
  component: NumericInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NumericInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumericInputStory: Story = {
  args: {
    label: "Numeric Input",
    min: 0,
    max: 50,
    allowMouseWheel: true,
  },
};
