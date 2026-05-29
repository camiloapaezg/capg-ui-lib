import type { Meta, StoryObj } from "@storybook/react-vite";
import { RangeSlider } from ".";

const meta = {
  title: "Components/Range Slider",
  component: RangeSlider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RangeSliderStory: Story = {
  args: {
    label: "Label",
    disabled: false,
    range: false,
    orientation: "horizontal",
    defaultValue: [30, 60],
    marks: [0, 20, 40, 60, 80, 100],
    thumbCollisionBehavior: "push",
  },
};
