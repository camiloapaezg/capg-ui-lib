export const ButtonAppearance = {
  Primary: "Primary",
  Secondary: "Secondary",
  Outline: "Outline",
  Ghost: "Ghost",
} as const;

export type ButtonAppearance =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];
