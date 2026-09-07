import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown, type DropdownProps } from ".";
import { useTheme } from "../ThemeProvider/useTheme";
import type { DropdownOption } from "./types";

const items: DropdownOption[] = Array.from({ length: 18 }, (_, index) => ({
  value: `value-${index}`,
  label: `Option ${index}`,
  group: `Group ${(index % 3) + 1}`,
}));

const Content = ({ ...rest }: DropdownProps) => {
  const { className } = useTheme();
  return <Dropdown {...rest} positionerProps={{ className }} />;
};

const meta = {
  title: "Components/Dropdown",
  component: Content,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {
        disable: true,
      },
    },
    valueTextProps: {
      control: {
        disable: true,
      },
    },
    contentProps: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;
export const DropdownStory: Story = {
  args: {
    label: "Dropdown",
    options: { items },
    disabled: false,
    group: false,
    multiple: false,
    valueTextProps: {
      placeholder: "Select an option...",
    },
  },
};
