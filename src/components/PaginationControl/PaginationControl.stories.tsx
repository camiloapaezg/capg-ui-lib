import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationControl } from ".";

const meta = {
  title: "Components/Pagination",
  component: PaginationControl,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PaginationControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationControlStory: Story = {
  args: {
    count: 100,
    pageSize: 10,
    siblingCount: 2,
  },
};
