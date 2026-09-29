import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "cinema" | "cinemaOutline";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-bronze text-paper hover:bg-bronze-deep border border-bronze",
  secondary:
    "bg-transparent text-ink border border-line-strong hover:border-ink",
  ghost: "bg-transparent text-ink border border-transparent hover:border-line-strong",
  // Explicit hex so dark-section inherited light text cannot wipe the label
  cinema:
    "bg-[#F7F3EC] !text-[#141210] hover:bg-[#FFFCFA] border border-[#F7F3EC]",
  cinemaOutline:
    "bg-transparent !text-[#F7F3EC] border border-[#A39A8E] hover:border-[#F7F3EC] hover:!text-[#F7F3EC]",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[0.95rem]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium tracking-wide transition-colors duration-200 ease-[var(--ease-out)] disabled:opacity-50 disabled:pointer-events-none min-h-11",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
