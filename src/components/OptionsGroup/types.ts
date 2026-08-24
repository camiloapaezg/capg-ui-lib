import type { RadioGroup } from "@ark-ui/react";

export type OptionsGroupItem = RadioGroup.ItemProps &
  React.RefAttributes<HTMLLabelElement> & {
    value: string;
    text: string;
  };
