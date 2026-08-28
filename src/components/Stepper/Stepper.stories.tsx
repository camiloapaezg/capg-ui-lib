import type { Meta, StoryObj } from "@storybook/react-vite";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { Stepper } from ".";
import { themeColors } from "../../styles/theme";
import type { StepperItem } from "./types";

const Container = ({
  children,
  ...rest
}: PropsWithChildren<Omit<HTMLAttributes<HTMLDivElement>, "style">>) => {
  return (
    <article
      {...rest}
      style={{
        height: "100%",
        width: "100%",
        padding: "1rem",
        fontSize: "0.875rem",
        borderRadius: "0.5rem",
        background: themeColors.brand.lighter,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </article>
  );
};

const items: StepperItem[] = [
  {
    value: "first",
    title: "First",
    content: (
      <Container>
        <span>{"This is the first step."}</span>
      </Container>
    ),
  },
  {
    value: "second",
    title: "Second",
    content: (
      <Container>
        <span>{"This is the second step."}</span>
      </Container>
    ),
  },
  {
    value: "third",
    title: "Third",
    content: (
      <Container>
        <span>{"This is the third step."}</span>
      </Container>
    ),
  },
  {
    value: "fourth",
    title: "Fourth",
    content: (
      <Container>
        <span>{"This is the fourth step."}</span>
      </Container>
    ),
  },
];

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    completedContent: {
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
} as Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;
export const StepperStory: Story = {
  args: {
    items,
    orientation: "vertical",
    completedContent: (
      <Container>
        <span>{"Steps completed - Thank you!"}</span>
      </Container>
    ),
  },
};
