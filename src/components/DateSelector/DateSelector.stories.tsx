import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateSelector, type DateSelectorProps } from ".";
import { useTheme } from "../ThemeProvider/useTheme";

const Content = ({ ...rest }: DateSelectorProps) => {
  const { className } = useTheme();
  return <DateSelector {...rest} positionerProps={{ className }} />;
};

const meta = {
  title: "Components/Date Selector",
  component: Content,
  tags: ["autodocs"],
  argTypes: {
    selectionMode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateSelectorStory: Story = {
  args: {
    label: "Select date",
    selectionMode: "single",
    disabled: false,
  },
};
