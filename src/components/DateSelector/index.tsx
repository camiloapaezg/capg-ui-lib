import {
  DatePicker,
  type DateValue,
  type UseDatePickerContext,
} from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import clsx from "clsx";
import type { JSX, PropsWithChildren } from "react";
import React from "react";
import { CalendarIcon } from "../../icons/Calendar/CalendarIcon";
import { ChevronDownIcon } from "../../icons/ChevronDown/ChevronDownIcon";
import { CloseIcon } from "../../icons/Close/CloseIcon";
import { labelRootClass } from "../../styles/common.css";
import { textInputClass } from "../TextInput/styles.css";
import {
  buttonRemoveClass,
  contentClass,
  controlClass,
  iconTriggerClass,
  iconNextClass,
  iconPrevClass,
  iconRemoveClass,
  multipleInputWrapperClass,
  placeholderClass,
  textRangeClass,
  rootClass,
  selectedDateClass,
  tableCellClass,
  tableCellTriggerClass,
  tableClass,
  tableHeaderClass,
  tableRowClass,
  triggerClass,
  triggerNextClass,
  triggerPrevClass,
  triggerRangeTextClass,
  viewClass,
  viewControlClass,
} from "./styles.css";

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
    label?: string;
    positionerProps?: DatePicker.PositionerProps &
      React.RefAttributes<HTMLDivElement>;
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
      <DatePicker.PrevTrigger className={triggerPrevClass}>
        <ChevronDownIcon className={iconPrevClass} />
      </DatePicker.PrevTrigger>
      <DatePicker.ViewTrigger className={triggerRangeTextClass}>
        <DatePicker.RangeText className={textRangeClass} />
      </DatePicker.ViewTrigger>
      <DatePicker.NextTrigger className={triggerNextClass}>
        <ChevronDownIcon className={iconNextClass} />
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
            <div role="presentation" className={multipleInputWrapperClass}>
              {context.value.length === 0 ? (
                <span className={placeholderClass}>{"-"}</span>
              ) : (
                context.value.map((date, index) => (
                  <span key={index} className={selectedDateClass}>
                    {formatWithDay(date)}
                    <button
                      aria-label={date.toString()}
                      className={buttonRemoveClass}
                      onClick={() =>
                        context.setValue(
                          context.value.filter((_, i) => i !== index),
                        )
                      }
                    >
                      <CloseIcon className={iconRemoveClass} />
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
  selectionMode,
  disabled,
  className,
  positionerProps,
  ...rest
}: DateSelectorProps) => {
  return (
    <DatePicker.Root
      {...rest}
      selectionMode={selectionMode}
      disabled={disabled}
      className={clsx(rootClass, className)}
    >
      {label && (
        <DatePicker.Label className={labelRootClass}>{label}</DatePicker.Label>
      )}
      <DatePicker.Control className={controlClass}>
        <ViewInput selectionMode={selectionMode} />
        <DatePicker.Trigger className={triggerClass}>
          <CalendarIcon className={iconTriggerClass} />
        </DatePicker.Trigger>
        <DatePicker.ClearTrigger className={triggerClass} disabled={disabled}>
          <CloseIcon className={iconTriggerClass} />
        </DatePicker.ClearTrigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner {...positionerProps}>
          <DatePicker.Content className={contentClass}>
            {["day", "month", "year"].map((view, index) => (
              <View
                key={`${view}-${index}`}
                view={view as DatePicker.DateView}
              />
            ))}
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
};
