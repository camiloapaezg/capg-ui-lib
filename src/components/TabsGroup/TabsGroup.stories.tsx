import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabsGroup } from ".";
import { colors } from "../../styles/theme.css";
import type { TabsGroupItem } from "./types";

const items: TabsGroupItem[] = Array.from({ length: 4 }, (_, index) => ({
  value: `tab-${index}`,
  title: `Tab ${index + 1}`,
  content: (
    <article
      style={{
        height: "20rem",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        background: colors.surface.light,
        padding: "1rem",
        borderRadius: "0.375rem",
      }}
    >
      <span
        style={{
          textAlign: "center",
        }}
      >{`This is the content of the tab ${index + 1}`}</span>
    </article>
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
