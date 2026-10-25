import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-gray" | "danger" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    xs: "px-2.5 py-1 text-xs rounded-md gap-1",
    sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-4 py-2 text-sm rounded-lg gap-2",
    lg: "px-5 py-2.5 text-base rounded-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1A6CF0] hover:bg-[#1558C9] active:bg-[#1147A3] text-white shadow-sm hover:shadow",
    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs",
    outline:
      "bg-white border border-[#1A6CF0] text-[#1A6CF0] hover:bg-[#F0F6FF] active:bg-[#E0EEFF]",
    "outline-gray":
      "bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50",
    danger:
      "bg-[#E13B30] hover:bg-[#C92F25] active:bg-[#AB261D] text-white shadow-sm hover:shadow",
    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
