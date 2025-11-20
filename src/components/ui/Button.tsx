import * as React from "react";
import Link from "next/link";
import clsx from "clsx";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps
  extends BaseButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLinkProps
  extends BaseButtonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: `
      bg-brand text-black 
      hover:bg-brandHover 
      active:scale-[0.97]
      border border-brand
      shadow-[0_0_15px_rgba(255,140,0,0.15)]
    `,

    secondary: `
      bg-white/10 text-white 
      backdrop-blur-md 
      border border-white/20
      hover:bg-white/20 
      active:scale-[0.97]
    `,

    outline: `
      text-white 
      border border-white/40 
      bg-white/5 
      backdrop-blur-lg
      hover:bg-white/15 
      hover:border-white/60
      active:scale-[0.97]
      shadow-sm
    `,

    ghost: `
      text-white 
      bg-transparent
      border border-transparent
      hover:bg-white/10
      active:scale-[0.97]
    `,

    danger: `
      bg-red-600 text-white 
      hover:bg-red-700 
      active:bg-red-800 active:scale-[0.97]
      border border-red-600
    `,

    link: `
      text-brand hover:text-brandHover
      underline hover:no-underline
      px-0 py-0 bg-transparent
      border-none
    `,
  };

  const combined = clsx(
    baseClasses,
    variants[variant],
    className,
    "cursor-pointer"
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={clsx(combined, "cursor-pointer")} {...rest}>
        {props.children}
      </Link>
    );
  }

  // Botão normal
  return <button className={combined} {...props} />;
}
