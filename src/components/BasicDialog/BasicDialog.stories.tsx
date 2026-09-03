import { Dialog } from "@ark-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BasicDialog, type BasicDialogProps } from ".";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";

const Content = ({
  ...rest
}: Omit<BasicDialogProps, "portalProps" | "children">) => {
  return (
    <BasicDialog {...rest}>
      <Dialog.Description style={{ overflowY: "auto" }}>
        {
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }
      </Dialog.Description>
      <Dialog.CloseTrigger asChild>
        <Button
          appearance={ButtonAppearance.Primary}
          label={"Done"}
          style={{ alignSelf: "flex-end", marginTop: "1em" }}
        />
      </Dialog.CloseTrigger>
    </BasicDialog>
  );
};

const meta = {
  title: "Components/Basic Dialog",
  component: Content,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: {
        disable: true,
      },
    },
    titleProps: {
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

export const BasicDialogStory: Story = {
  args: {
    title: "Session Settings",
    trigger: (
      <Button appearance={ButtonAppearance.Primary} label="Show Dialog" />
    ),
  },
};
