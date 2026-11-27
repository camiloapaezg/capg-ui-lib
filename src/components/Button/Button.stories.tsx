import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { ButtonAppearance } from "./types";

type ButtonsArrayProps = {
  disabled: boolean;
};

const ButtonsArray = ({ disabled }: ButtonsArrayProps) => {
  return (
    <div
      role="presentation"
      style={{
        width: "100%",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {Object.keys(ButtonAppearance).map((key) => (
        <Button
          key={`button-${key}`}
          appearance={key as ButtonAppearance}
          label={key}
          disabled={disabled}
          icon={
            <Icon
              style={{ fontSize: "20px", color: "inherit" }}
              icon="fluent:checkmark-circle-16-regular"
            />
          }
        />
      ))}
    </div>
  );
};

const meta = {
  title: "Components/Button",
  component: ButtonsArray,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonsArray>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: {
    disabled: false,
  },
};
