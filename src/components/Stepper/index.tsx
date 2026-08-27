import { Steps } from "@ark-ui/react";
import clsx from "clsx";
import type { JSX } from "react";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";
import {
  actionsClass,
  contentClass,
  contentWrapperClass,
  indicatorClass,
  itemClass,
  listClass,
  rootClass,
  separatorClass,
  triggerClass,
} from "./styles.css";
import type { StepperItem } from "./types";

export type StepperProps = Omit<Steps.RootProps, "count"> &
  React.RefAttributes<HTMLDivElement> & {
    items: StepperItem[];
    completedContent: JSX.Element;
    contentProps?: Omit<Steps.ContentProps, "index"> &
      React.RefAttributes<HTMLDivElement>;
  };

export const Stepper = ({
  items,
  completedContent,
  contentProps,
  className,
  ...rest
}: StepperProps) => {
  return (
    <Steps.Root
      {...rest}
      className={clsx(rootClass, className)}
      count={items.length}
    >
      <Steps.List className={listClass} aria-label="Steps">
        {items.map(({ value, title }, index) => (
          <Steps.Item className={itemClass} key={`${value}-step`} index={index}>
            <Steps.Trigger className={triggerClass} aria-current={false}>
              <Steps.Indicator className={indicatorClass}>
                {index + 1}
              </Steps.Indicator>
              <span>{title}</span>
            </Steps.Trigger>
            <Steps.Separator className={separatorClass} />
          </Steps.Item>
        ))}
      </Steps.List>
      <div className={contentWrapperClass}>
        {items.map(({ value, content }, index) => (
          <Steps.Content
            {...contentProps}
            key={`${value}-step-content`}
            index={index}
            className={clsx(contentClass, contentProps?.className)}
          >
            {content}
          </Steps.Content>
        ))}

        <Steps.CompletedContent
          className={clsx(contentClass, contentProps?.className)}
        >
          {completedContent}
        </Steps.CompletedContent>

        <div className={actionsClass}>
          <Steps.PrevTrigger asChild>
            <Button appearance={ButtonAppearance.Outline} label={"Back"} />
          </Steps.PrevTrigger>
          <Steps.NextTrigger asChild>
            <Button appearance={ButtonAppearance.Primary} label={"Next"} />
          </Steps.NextTrigger>
        </div>
      </div>
    </Steps.Root>
  );
};
