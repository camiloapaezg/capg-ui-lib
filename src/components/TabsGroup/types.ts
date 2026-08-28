import type { Tabs } from "@ark-ui/react";

export type TabsGroupItem = {
  value: string;
  title: string;
  content: React.ReactNode;
  triggerProps?: Omit<Tabs.TriggerProps, "value"> &
    React.RefAttributes<HTMLButtonElement>;
  contentProps?: Omit<Tabs.ContentProps, "value"> &
    React.RefAttributes<HTMLDivElement>;
};
