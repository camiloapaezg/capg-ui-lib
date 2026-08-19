import { Pagination } from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import {
  controlsClass,
  ellipsisClass,
  iconClass,
  itemClass,
  rootClass,
} from "./styles.css";

export type PaginationControlProps = Pagination.RootProps &
  React.RefAttributes<HTMLElement>;

export const PaginationControl = ({
  className,
  ...rest
}: PaginationControlProps) => {
  return (
    <Pagination.Root {...rest} className={clsx(rootClass, className)}>
      <div className={controlsClass}>
        <Pagination.PrevTrigger className={itemClass}>
          <Icon icon="fluent:chevron-left-16-regular" className={iconClass} />
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
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
            )
          }
        </Pagination.Context>
        <Pagination.NextTrigger className={itemClass}>
          <Icon icon="fluent:chevron-right-16-regular" className={iconClass} />
        </Pagination.NextTrigger>
      </div>
    </Pagination.Root>
  );
};
