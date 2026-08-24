import type { Meta, StoryObj } from "@storybook/react-vite";
import { QRCode } from ".";

const meta = {
  title: "Components/QR Code",
  component: QRCode,
  tags: ["autodocs"],
  argTypes: {
    encoding: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;
export const QRCodeStory: Story = {
  args: {
    defaultValue: "http://ark-ui.com",
    encoding: { ecc: "H" },
    overlayProps: {
      src: "https://ark-ui.com/icon-192.png",
      alt: "Ark UI Logo",
    },
  },
};
