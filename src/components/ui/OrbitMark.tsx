interface OrbitMarkProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * The Nucleus Labs signature mark: a core with orbiting satellites —
 * literally the company (the "nucleus") with its services and products
 * orbiting it. Used in the logo, hero visual, and section accents.
 */
export function OrbitMark({ size = 30, className, animated = false }: OrbitMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
    >
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="6"
        transform="rotate(30 16 16)"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1.2"
        className={animated ? "origin-center animate-spin-slow" : undefined}
      />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="6"
        transform="rotate(-30 16 16)"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1.2"
        className={animated ? "origin-center animate-spin-slow-reverse" : undefined}
      />
      <circle cx="16" cy="16" r="4" fill="#1552F0" />
      <circle cx="27" cy="12" r="1.6" fill="#2FD5C8" />
    </svg>
  );
}
