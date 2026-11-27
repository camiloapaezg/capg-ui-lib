import type { Meta, StoryObj } from "@storybook/react-vite";
import { UploadFile } from ".";

const meta = {
  title: "Components/Upload File",
  component: UploadFile,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof UploadFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadFileStory: Story = {
  args: {
    disabled: false,
    label: "File Upload",
    compact: false,
    title: "Drag and drop files here",
    description: "or click to browse",
  },
};
