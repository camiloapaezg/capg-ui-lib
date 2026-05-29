import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from ".";

const meta = {
  title: "Components/Text Input",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    onValueChange: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputStory: Story = {
  args: {
    disabled: false,
    placeholder: "Input some text...",
    fieldProps: {
      label: "Label",
      invalid: false,
      helperText: "Some text as help",
      errorText: "This value is invalid",
    },
  },
};
