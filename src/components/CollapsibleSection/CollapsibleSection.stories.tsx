import type { Meta, StoryObj } from "@storybook/react-vite";
import { CollapsibleSection } from ".";
import { type CollapsibleItem } from "./types";

const items: CollapsibleItem[] = [
  {
    value: "ark-ui",
    title: "What is Ark UI?",
    content: "A headless component library for building accessible web apps.",
  },
  {
    value: "getting-started",
    title: "How to get started?",
    content: "Install the package and import the components you need.",
    disabled: true,
  },
  {
    value: "maintainers",
    title: "Who maintains this project?",
    content: "Ark UI is maintained by the Chakra UI team.",
  },
];

const meta = {
  title: "Components/Collapsible Section",
  component: CollapsibleSection,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CollapsibleSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CollapsibleSectionStory: Story = {
  args: {
    items,
    orientation: "vertical",
    style: {
      width: "30rem",
    },
  },
};
