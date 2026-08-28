import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabsGroup } from ".";
import { themeColors } from "../../styles/theme";
import type { TabsGroupItem } from "./types";

const items: TabsGroupItem[] = Array.from({ length: 4 }, (_, index) => ({
  value: `tab-${index}`,
  title: `Tab ${index + 1}`,
  content: (
    <p
      style={{
        minHeight: "20rem",
        minWidth: "20rem",
        background: themeColors.gray.g100,
        textAlign: "center",
        padding: "1rem",
        borderRadius: "0.375rem",
      }}
    >{`This is the content of the tab ${index + 1}`}</p>
  ),
  triggerProps: {
    disabled: index === 2,
  },
}));

const meta = {
  title: "Components/Tabs",
  component: TabsGroup,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: {
        disable: true,
      },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof TabsGroup>;

export default meta;

type Story = StoryObj<typeof meta>;
export const TabsGroupStory: Story = {
  args: {
    items,
    defaultValue: items[0].value,
    orientation: "horizontal",
  },
};
