import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from ".";
import type { DropdownOption } from "./types";

const items: DropdownOption[] = Array.from({ length: 18 }, (_, index) => ({
  value: `value-${index}`,
  label: `Option ${index}`,
  group: `Group ${(index % 3) + 1}`,
}));

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {
        disable: true,
      },
    },
    valueTextProps: {
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;
export const DropdownStory: Story = {
  args: {
    label: "Dropdown",
    options: { items },
    disabled: false,
    group: false,
    multiple: false,
    valueTextProps: {
      placeholder: "Select an option...",
    },
  },
};
