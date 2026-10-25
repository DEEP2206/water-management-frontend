import React from "react";

export type BadgeVariant =
  | "warning" // Under Review
  | "info" // Submitted
  | "success" // Approved / Resolved
  | "primary" // In Progress
  | "neutral" // Closed
  | "danger"; // No Active Connection

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "xs" | "sm" | "md";
  dot?: boolean;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "sm",
  dot = false,
  icon,
  className = "",
  ...props
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    warning: "bg-[#FFF8E7] text-[#B76E00] border border-[#FFE299]",
    info: "bg-[#EBF5FF] text-[#0066CC] border border-[#B8DCFF]",
    success: "bg-[#EBF9F1] text-[#0E8A42] border border-[#B7EDCE]",
    primary: "bg-[#EDF4FF] text-[#1A6CF0] border border-[#C5DCFF]",
    neutral: "bg-[#F1F3F5] text-[#5C6470] border border-[#E2E6EA]",
    danger: "bg-[#FFF0F0] text-[#D93025] border border-[#FDC8C5]",
  };

  const dotColors: Record<BadgeVariant, string> = {
    warning: "bg-[#B76E00]",
    info: "bg-[#0066CC]",
    success: "bg-[#0E8A42]",
    primary: "bg-[#1A6CF0]",
    neutral: "bg-[#5C6470]",
    danger: "bg-[#D93025]",
  };

  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px] font-medium rounded-full",
    sm: "px-2.5 py-0.5 text-[11px] font-medium rounded-full",
    md: "px-3 py-1 text-xs font-medium rounded-full",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap leading-none select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColors[variant]}`}
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
