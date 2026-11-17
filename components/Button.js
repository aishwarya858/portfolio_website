import Link from "next/link";

/**
 * Reusable button. Renders a Next.js <Link> for internal routes,
 * an <a> for external links, or a <button> when no href is given.
 * variant: "primary" | "secondary" | "ghost"
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  icon: Icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (href && (external || href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
