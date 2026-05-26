import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateSelector } from ".";
import "../../styles/stories.css";

const meta = {
  title: "Components/Date Selector",
  component: DateSelector,
  tags: ["autodocs"],
  argTypes: {
    selectionMode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
  },
} satisfies Meta<typeof DateSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateSelectorStory: Story = {
  args: {
    label: "Select date",
    selectionMode: "single",
    disabled: false,
  },
};
