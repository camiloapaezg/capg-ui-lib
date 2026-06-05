import type { Menu } from "@ark-ui/react/menu";
import type { JSX } from "react";

type ContextMenuItemBase = Omit<
  React.RefAttributes<HTMLDivElement>,
  "className"
> & {
  value: string;
  text?: string;
  group?: string;
};

export type MenuItemProps = {
  category: "button";
} & Omit<Menu.ItemProps, "value">;

export type CheckboxItemProps = {
  category: "checkbox";
} & Omit<Menu.CheckboxItemProps, "value">;

export type CustomItemProps = {
  category: "custom";
} & {
  onRenderItem: () => JSX.Element;
};

export type ContextMenuItem = ContextMenuItemBase &
  (MenuItemProps | CheckboxItemProps | CustomItemProps);
