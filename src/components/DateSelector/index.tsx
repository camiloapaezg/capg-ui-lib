import {
  DatePicker,
  type DateValue,
  type UseDatePickerContext,
} from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import type { JSX, PropsWithChildren } from "react";
import React from "react";
import {
  chevronLeftClass,
  chevronRightClass,
  clearTriggerClass,
  contentClass,
  controlClass,
  iconClass,
  labelClass,
  multipleInputClass,
  placeholderClass,
  rangeTextClass,
  removeButtonClass,
  removeIconClass,
  rootClass,
  selectedDateClass,
  tableCellClass,
  tableCellTriggerClass,
  tableClass,
  tableHeaderClass,
  tableRowClass,
  triggerClass,
  viewClass,
  viewControlClass,
} from "./styles.css";
import { textInputClass } from "../TextInput/styles.css";

type ViewControlProps = DatePicker.ViewControlProps &
  React.RefAttributes<HTMLDivElement>;

type ViewTableProps = DatePicker.TableProps &
  React.RefAttributes<HTMLTableElement> & {
    view: DatePicker.DateView;
    context: UseDatePickerContext;
  };

type ViewProps = DatePicker.ViewProps & React.RefAttributes<HTMLDivElement>;

type ViewInputProps = {
  selectionMode?: "single" | "multiple" | "range";
};

export type DateSelectorProps = DatePicker.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    label: string;
    clearLabel?: string;
  };

const formatWithDay = (date: DateValue) => {
  const jsDate = date.toDate("UTC");
  return jsDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const ViewControl = ({ ...rest }: ViewControlProps) => {
  return (
    <DatePicker.ViewControl {...rest} className={viewControlClass}>
      <DatePicker.PrevTrigger className={chevronLeftClass}>
        <Icon icon="fluent:chevron-left-16-regular" className={iconClass} />
      </DatePicker.PrevTrigger>
      <DatePicker.ViewTrigger className={rangeTextClass}>
        <DatePicker.RangeText />
      </DatePicker.ViewTrigger>
      <DatePicker.NextTrigger className={chevronRightClass}>
        <Icon icon="fluent:chevron-right-16-regular" className={iconClass} />
      </DatePicker.NextTrigger>
    </DatePicker.ViewControl>
  );
};

const ViewTable = ({ view, context, ...rest }: ViewTableProps) => {
  let content: JSX.Element | null = null;
  switch (view) {
    case "day":
      content = (
        <React.Fragment>
          <DatePicker.TableHead>
            <DatePicker.TableRow className={tableRowClass}>
              {context.weekDays.map((weekDay, id) => (
                <DatePicker.TableHeader key={id} className={tableHeaderClass}>
                  {weekDay.short}
                </DatePicker.TableHeader>
              ))}
            </DatePicker.TableRow>
          </DatePicker.TableHead>
          <DatePicker.TableBody>
            {context.weeks.map((week, id) => (
              <DatePicker.TableRow key={id} className={tableRowClass}>
                {week.map((day, id) => (
                  <DatePicker.TableCell
                    key={id}
                    value={day}
                    className={tableCellClass}
                  >
                    <DatePicker.TableCellTrigger
                      className={tableCellTriggerClass}
                    >
                      {day.day}
                    </DatePicker.TableCellTrigger>
                  </DatePicker.TableCell>
                ))}
              </DatePicker.TableRow>
            ))}
          </DatePicker.TableBody>
        </React.Fragment>
      );
      break;
    case "month":
      content = (
        <DatePicker.TableBody>
          {context
            .getMonthsGrid({ columns: 4, format: "short" })
            .map((months, id) => (
              <DatePicker.TableRow key={id} className={tableRowClass}>
                {months.map((month, id) => (
                  <DatePicker.TableCell
                    key={id}
                    value={month.value}
                    className={tableCellClass}
                  >
                    <DatePicker.TableCellTrigger
                      className={tableCellTriggerClass}
                    >
                      {month.label}
                    </DatePicker.TableCellTrigger>
                  </DatePicker.TableCell>
                ))}
              </DatePicker.TableRow>
            ))}
        </DatePicker.TableBody>
      );
      break;
    case "year":
      content = (
        <DatePicker.TableBody>
          {context.getYearsGrid({ columns: 4 }).map((years, id) => (
            <DatePicker.TableRow key={id} className={tableRowClass}>
              {years.map((year, id) => (
                <DatePicker.TableCell
                  key={id}
                  value={year.value}
                  className={tableCellClass}
                >
                  <DatePicker.TableCellTrigger
                    className={tableCellTriggerClass}
                  >
                    {year.label}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              ))}
            </DatePicker.TableRow>
          ))}
        </DatePicker.TableBody>
      );
      break;
  }

  return (
    <DatePicker.Table {...rest} className={tableClass}>
      {content}
    </DatePicker.Table>
  );
};

const View = ({ view, ...rest }: PropsWithChildren<ViewProps>) => {
  return (
    <DatePicker.View view={view} {...rest} className={viewClass}>
      <DatePicker.Context>
        {(context) => (
          <React.Fragment>
            <ViewControl />
            <ViewTable view={view} context={context} />
          </React.Fragment>
        )}
      </DatePicker.Context>
    </DatePicker.View>
  );
};

const ViewInput = ({ selectionMode }: ViewInputProps) => {
  let result: JSX.Element | null = null;

  switch (selectionMode) {
    case "single":
      result = <DatePicker.Input className={textInputClass} />;
      break;
    case "range":
      result = (
        <React.Fragment>
          <DatePicker.Input className={textInputClass} index={0} />
          <DatePicker.Input className={textInputClass} index={1} />
        </React.Fragment>
      );
      break;
    case "multiple":
      result = (
        <DatePicker.Context>
          {(context) => (
            <div className={multipleInputClass}>
              {context.value.length === 0 ? (
                <span className={placeholderClass}>{"Select dates..."}</span>
              ) : (
                context.value.map((date, index) => (
                  <span key={index} className={selectedDateClass}>
                    {formatWithDay(date)}
                    <button
                      className={removeButtonClass}
                      onClick={() =>
                        context.setValue(
                          context.value.filter((_, i) => i !== index),
                        )
                      }
                    >
                      <Icon
                        icon="fluent:dismiss-12-regular"
                        className={removeIconClass}
                      />
                    </button>
                  </span>
                ))
              )}
            </div>
          )}
        </DatePicker.Context>
      );
      break;
  }

  return result;
};

export const DateSelector = ({
  label,
  clearLabel,
  selectionMode,
  disabled,
  className,
  ...rest
}: DateSelectorProps) => {
  return (
    <DatePicker.Root
      {...rest}
      selectionMode={selectionMode}
      disabled={disabled}
      className={clsx(rootClass, className)}
    >
      <DatePicker.Label className={labelClass}>{label}</DatePicker.Label>
      <DatePicker.Control className={controlClass}>
        <ViewInput selectionMode={selectionMode} />
        <DatePicker.Trigger className={triggerClass}>
          <Icon icon="fluent:calendar-16-regular" className={iconClass} />
        </DatePicker.Trigger>
        <DatePicker.ClearTrigger
          className={clearTriggerClass}
          disabled={disabled}
        >
          {clearLabel ?? "Clear"}
        </DatePicker.ClearTrigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content className={contentClass}>
            {["day", "month", "year"].map((view) => (
              <View view={view as DatePicker.DateView} />
            ))}
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
};
