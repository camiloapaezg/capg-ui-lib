import type { CollectionOptions } from "@ark-ui/react/collection";
import { Portal } from "@ark-ui/react/portal";
import {
  Select,
  createListCollection,
  useSelectContext,
  type SelectRootComponentProps,
} from "@ark-ui/react/select";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";
import {
  contentClass,
  controlClass,
  controlIndicatorClass,
  controlIndicatorsClass,
  controlTriggerClass,
  itemClass,
  itemGroupClass,
  itemGroupLabelClass,
  itemIndicatorClass,
  itemTextClass,
  labelClass,
  rootClass,
  valueTextClass,
} from "./styles.css";
import type { DropdownOption } from "./types";
import { iconBaseClass } from "../../styles/common.css";

type SelectControlProps = Select.ValueTextProps &
  React.RefAttributes<HTMLSpanElement>;

type SelectOptionProps = Select.ItemProps & React.RefAttributes<HTMLDivElement>;

type SelectContentProps = Select.ContentProps &
  React.RefAttributes<HTMLDivElement> & {
    collection: Select.ListCollection<DropdownOption>;
    group?: boolean;
  };

export type DropdownOptions = Omit<
  CollectionOptions<DropdownOption>,
  "groupBy"
>;

export type DropdownProps = Omit<SelectRootComponentProps, "collection"> & {
  label: string;
  options: DropdownOptions;
  group?: boolean;
  valueTextProps?: SelectControlProps;
  contentProps?: Omit<SelectContentProps, "collection" | "groupBy">;
};

const SelectControl = ({ className, ...rest }: SelectControlProps) => {
  const select = useSelectContext();
  return (
    <Select.Control className={controlClass}>
      <Select.Trigger className={controlTriggerClass}>
        <Select.ValueText
          {...rest}
          className={clsx(valueTextClass, className)}
        />
      </Select.Trigger>
      <div className={controlIndicatorsClass}>
        {select.value.length > 0 && (
          <Select.ClearTrigger asChild>
            <Button
              appearance={ButtonAppearance.Ghost}
              icon={
                <Icon
                  icon="fluent:dismiss-16-regular"
                  className={iconBaseClass}
                />
              }
            />
          </Select.ClearTrigger>
        )}
        <Select.Indicator className={controlIndicatorClass}>
          <Icon
            icon="fluent:chevron-up-down-16-regular"
            className={iconBaseClass}
          />
        </Select.Indicator>
      </div>
    </Select.Control>
  );
};

const SelectOption = ({ item, ...rest }: SelectOptionProps) => {
  return (
    <Select.Item {...rest} item={item} className={itemClass}>
      <Select.ItemText className={itemTextClass}>{item.label}</Select.ItemText>
      <Select.ItemIndicator className={itemIndicatorClass}>
        {"✓"}
      </Select.ItemIndicator>
    </Select.Item>
  );
};

const SelectContent = ({
  collection,
  group,
  className,
  ...rest
}: SelectContentProps) => {
  let content: React.ReactNode;

  // Returns empty selection item
  if (collection.items.length === 0) {
    content = <span className={itemTextClass}>{"No items to display"}</span>;
  } else {
    if (group !== true) {
      content = collection.items.map((item) => (
        <SelectOption key={item.value} item={item} />
      ));
    } else {
      content = collection.group().map(([groupName, items]) => (
        <Select.ItemGroup className={itemGroupClass} key={groupName}>
          <Select.ItemGroupLabel className={itemGroupLabelClass}>
            {groupName}
          </Select.ItemGroupLabel>
          {items.map((item) => (
            <SelectOption key={item.value} item={item} />
          ))}
        </Select.ItemGroup>
      ));
    }
  }

  return (
    <Select.Content {...rest} className={clsx(contentClass, className)}>
      {content}
    </Select.Content>
  );
};

export const Dropdown = ({
  label,
  options,
  group,
  valueTextProps,
  contentProps,
  className,
  ...rest
}: DropdownProps) => {
  const collection = createListCollection<DropdownOption>({
    ...options,
    groupBy: group === true ? (item) => item.group ?? "" : undefined,
  });

  return (
    <Select.Root
      {...rest}
      collection={collection}
      className={clsx(rootClass, className)}
    >
      <Select.Label className={labelClass}>{label}</Select.Label>
      <SelectControl {...valueTextProps} />
      <Portal>
        <Select.Positioner>
          <SelectContent
            {...contentProps}
            collection={collection}
            group={group}
          />
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
