import { Dialog } from "@ark-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BasicDialog } from ".";
import "../../styles/stories.css";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";
import React from "react";

const meta = {
  title: "Components/Basic Dialog",
  component: BasicDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof BasicDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDialogStory: Story = {
  args: {
    title: "Session Settings",
    trigger: (
      <Button appearance={ButtonAppearance.Primary} label="Show Dialog" />
    ),
    children: (
      <React.Fragment>
        <Dialog.Description>
          {
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          }
        </Dialog.Description>
        <Dialog.CloseTrigger asChild>
          <Button
            appearance={ButtonAppearance.Primary}
            label={"Done"}
            style={{ alignSelf: "flex-end", marginTop: "1em" }}
          />
        </Dialog.CloseTrigger>
      </React.Fragment>
    ),
  },
};
