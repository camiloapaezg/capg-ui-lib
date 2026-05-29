import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from ".";
import type { DropdownOption } from "./types";

const items: DropdownOption[] = [
  {
    value: "option1",
    label: "Option 1",
    group: "Group 1",
  },
  {
    value: "option2",
    label: "Option 2",
    group: "Group 1",
  },
  {
    value: "option3",
    label: "Option 3 very very long",
    group: "Group 2",
  },
  {
    value: "option4",
    label: "Option 4",
    group: "Group 2",
  },
];

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
    label: "Label",
    options: { items },
    disabled: false,
    group: false,
    multiple: false,
    valueTextProps: {
      placeholder: "Select an option...",
    },
  },
};
