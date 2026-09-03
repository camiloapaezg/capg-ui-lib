import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionsGroup } from ".";
import type { OptionsGroupItem } from "./types";

const items: OptionsGroupItem[] = Array.from({ length: 5 }, (_, index) => ({
  value: `option_${index}`,
  text: `Option ${index}`,
  disabled: index === 3,
}));

const meta = {
  title: "Components/Options Group",
  component: OptionsGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OptionsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
export const OptionsGroupStory: Story = {
  args: {
    label: "Options Group",
    items,
    defaultValue: items[1].value,
  },
};
