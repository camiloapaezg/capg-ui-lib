export const AvatarShape = {
  circular: "circular",
  rectangular: "rectangular",
} as const;

export type AvatarShape = (typeof AvatarShape)[keyof typeof AvatarShape];
