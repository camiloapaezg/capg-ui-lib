import type { Accordion } from "@ark-ui/react";

export type CollapsibleItem = Accordion.ItemProps &
  React.RefAttributes<HTMLDivElement> & {
    value: string;
    title: string;
    content: string;
  };
