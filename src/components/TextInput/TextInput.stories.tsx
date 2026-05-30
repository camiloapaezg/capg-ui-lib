import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from ".";
import { FormField } from "../FormField";

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
  decorators: (Story) => (
    <FormField
      label="Label"
      invalid={false}
      helperText="Additional info"
      errorText="This value is invalid"
    >
      <Story />
    </FormField>
  ),
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputStory: Story = {
  args: {
    disabled: false,
    placeholder: "Input some text...",
  },
};
