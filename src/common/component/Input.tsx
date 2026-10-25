import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  inputSize = "md",
  className = "",
  id,
  ...props
}) => {
  const sizeStyles = {
    sm: "py-1.5 text-xs",
    md: "py-2 text-sm",
    lg: "py-2.5 text-base",
  };

  const paddingLeft = leftIcon ? "pl-9" : "pl-3.5";
  const paddingRight = rightIcon ? "pr-9" : "pr-3.5";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="pointer-events-none absolute left-3 flex items-center justify-center text-slate-400">
            {leftIcon}
          </div>
        )}
        <input
          id={id}
          className={`w-full rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#1A6CF0] focus:outline-none focus:ring-2 focus:ring-[#1A6CF0]/15 disabled:bg-slate-50 disabled:text-slate-400 ${sizeStyles[inputSize]} ${paddingLeft} ${paddingRight} ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""
          } ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 flex items-center justify-center text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
      {!error && helperText && <span className="text-xs text-slate-500">{helperText}</span>}
    </div>
  );
};

export default Input;
