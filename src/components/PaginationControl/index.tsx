import { Pagination, type UsePaginationContext } from "@ark-ui/react";
import clsx from "clsx";
import type { JSX } from "react";
import { ChevronDownIcon } from "../../icons/ChevronDown/ChevronDownIcon";
import {
  controlsClass,
  ellipsisClass,
  iconNextClass,
  iconPrevClass,
  itemClass,
  itemsClass,
  rootClass,
} from "./styles.css";

export type PaginationControlProps = Pagination.RootProps &
  React.RefAttributes<HTMLElement> & {
    items?: unknown[];
    onRenderItems?: (pagination: UsePaginationContext) => React.ReactNode;
    onRenderItem?: (
      item: unknown,
      pagination: UsePaginationContext,
    ) => JSX.Element;
  };

export const PaginationControl = ({
  onRenderItems,
  onRenderItem,
  items,
  className,
  ...rest
}: PaginationControlProps) => {
  return (
    <Pagination.Root {...rest} className={clsx(rootClass, className)}>
      <Pagination.Context>
        {(pagination) => (
          <>
            {onRenderItems?.(pagination)}
            {items && (
              <div className={itemsClass}>
                {pagination
                  .slice(items)
                  .map((item) => onRenderItem?.(item, pagination))}
              </div>
            )}
            <div className={controlsClass}>
              <Pagination.PrevTrigger className={itemClass}>
                <ChevronDownIcon className={iconPrevClass} />
              </Pagination.PrevTrigger>
              {pagination.pages.map((page, index) =>
                page.type === "page" ? (
                  <Pagination.Item key={index} {...page} className={itemClass}>
                    {page.value}
                  </Pagination.Item>
                ) : (
                  <Pagination.Ellipsis
                    key={index}
                    index={index}
                    className={ellipsisClass}
                  >
                    &#8230;
                  </Pagination.Ellipsis>
                ),
              )}
              <Pagination.NextTrigger className={itemClass}>
                <ChevronDownIcon className={iconNextClass} />
              </Pagination.NextTrigger>
            </div>
          </>
        )}
      </Pagination.Context>
    </Pagination.Root>
  );
};
