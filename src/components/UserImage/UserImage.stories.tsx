import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserImage, type UserImageProps } from ".";
import { AvatarShape } from "./types";

const Content = ({ ...rest }: UserImageProps) => {
  const sizes = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div
      id="user-image-array"
      style={{
        display: "flex",
        width: "100%",
        flexFlow: "row wrap",
        justifyContent: "space-evenly",
      }}
    >
      {sizes.map((size) => (
        <UserImage
          {...rest}
          style={{
            width: `${2 * size + 2}rem`,
            height: `${2 * size + 2}rem`,
            fontSize: `${size}rem`,
          }}
        />
      ))}
    </div>
  );
};

const meta = {
  title: "Components/User Image",
  component: Content,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      options: Object.values(AvatarShape),
      control: {
        type: "select",
      },
    },
    style: {
      control: {
        disable: true,
      },
    },
    imageProps: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserImageStory: Story = {
  args: {
    fallback: "CP",
    shape: "circular",
    imageProps: {
      src: "https://i.pravatar.csc/3000?u=ass",
      alt: "avatar",
    },
  },
};
