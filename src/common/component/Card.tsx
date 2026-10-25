import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  headerIcon?: React.ReactNode;
  headerAction?: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  headerIcon,
  headerAction,
  padding = "md",
  className = "",
  ...props
}) => {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
  };

  const hasHeader = title || headerIcon || headerAction;

  return (
    <div
      className={`rounded-xl border border-slate-200/90 bg-white shadow-xs transition-shadow duration-200 hover:shadow-sm ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {hasHeader && (
        <div className="mb-4 flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            {headerIcon && <span className="inline-flex shrink-0">{headerIcon}</span>}
            <div>
              {title && <h3 className="text-base font-semibold text-slate-800">{title}</h3>}
              {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
            </div>
          </div>
          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
