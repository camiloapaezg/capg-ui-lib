import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationControl } from ".";
import { themeColors } from "../../styles/theme";

type PaginationItem = {
  id: string;
  name: string;
  description: string;
};

const items: PaginationItem[] = Array.from({ length: 100 }, (_, index) => ({
  id: `item-${index + 1}`,
  name: `Item ${index + 1}`,
  description: `Description for item ${index + 1}`,
}));

const meta = {
  title: "Components/Pagination",
  component: PaginationControl,
  tags: ["autodocs"],
  argTypes: {
    onRenderItems: {
      control: {
        disable: true,
      },
    },
    items: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof PaginationControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationControlStory: Story = {
  args: {
    count: 100,
    pageSize: 10,
    siblingCount: 2,
    items,
    onRenderItem: (item: unknown) => (
      <div
        key={(item as { id: string }).id}
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          gap: "0.25rem",
          padding: "0.5rem",
          border: `1px solid ${themeColors.brand.primary}`,
          borderRadius: "0.25rem",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          {(item as { name: string }).name}
        </span>
        <span style={{ fontSize: "0.875rem" }}>
          {(item as { description: string }).description}
        </span>
      </div>
    ),
  },
};
