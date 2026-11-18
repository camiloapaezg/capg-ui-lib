import type { Toast } from "@ark-ui/react";

export type ToastSemanticIcons = {
  [type in Toast.Type]?: React.ReactNode;
};
