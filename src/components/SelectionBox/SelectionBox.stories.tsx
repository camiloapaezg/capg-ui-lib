import type { Meta, StoryObj } from "@storybook/react-vite";
import "../../styles/stories.css";
import { SelectionBox } from ".";

const meta = {
  title: "Components/Selection Box",
  component: SelectionBox,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectionBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectionBoxStory: Story = {
  args: {
    label: "Is checked",
    disabled: false,
    // checked: "indeterminate",
  },
};
