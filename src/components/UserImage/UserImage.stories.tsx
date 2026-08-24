import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserImage } from ".";

const meta = {
  title: "Components/User Image",
  component: UserImage,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof UserImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserImageStory: Story = {
  args: {
    fallback: "CP",
    imageProps: {
      src: "https://i.pravatar.cc/3000?u=ass",
      alt: "avatar",
    },
    style: {
      width: "5rem",
      height: "5rem",
    },
  },
};
