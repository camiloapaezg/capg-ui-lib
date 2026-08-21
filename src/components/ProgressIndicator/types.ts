export const ProgressIndicatorAppearance = {
  Linear: "Linear",
  Circular: "Circular",
} as const;

export type ProgressIndicatorAppearance =
  (typeof ProgressIndicatorAppearance)[keyof typeof ProgressIndicatorAppearance];
