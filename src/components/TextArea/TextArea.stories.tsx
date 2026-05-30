import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from ".";
import { FormField, type InputFieldProps } from "../FormField";

const fieldProps: InputFieldProps = {
  label: "Label",
  invalid: false,
  helperText: "Some text as help",
  errorText: "This value is invalid",
};

const meta = {
  title: "Components/Text Area",
  component: TextArea,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FormField {...fieldProps}>
      <Story />
    </FormField>
  ),
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TextAreaStory: Story = {
  args: {
    disabled: false,
    placeholder: "Input some text...",
    autoresize: false,
  },
};
