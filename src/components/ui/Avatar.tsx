import React from "react";
import clsx from "clsx";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
  "2xl": 128,
};

interface AvatarProps {
  src?: string | null;
  name?: string | null;
  size?: AvatarSize;
  className?: string;
  onClick?: () => void;
  rounded?: boolean;
}

export function Avatar({
  src,
  name,
  size = "md",
  className,
  onClick,
  rounded = true,
}: AvatarProps) {
  const px = sizeMap[size];

  name = name || "User Default";

  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&size=${px * 2.5}&background=random&color=fff&bold=true&format=jpeg`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || fallbackUrl}
      alt={name}
      width={px}
      height={px}
      onClick={onClick}
      draggable={false}
      className={clsx(
        rounded && "rounded-full",
        "object-cover select-none",
        onClick && "cursor-pointer hover:opacity-80 transition",
        className
      )}
    />
  );
}
