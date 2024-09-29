import React from "react";
import { cn } from "../../utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  label: string;
  id: string;
  value: string;
  error?: string | undefined;
  showHelper?: boolean;
}

export function TextInput({
  className,
  onChange,
  label,
  id,
  value,
  error,
  showHelper = true,
  ...props
}: Props) {
  return (
    <div className="mt-2 w-full">
      <div className="relative group">
        <input
          {...props}
          id={id}
          value={value}
          onChange={onChange}
          required
          className={cn(
            `border ${
              error ? "border-red-dark" : "border-gray-medium"
            } rounded-md w-full px-4 pb-2 pt-8 text-sm peer bg-transparent outline-none`,
            className
          )}
        />
        <label
          htmlFor={id}
          className={`transform capitalize ${
            error ? "text-red-dark" : "text-gray-medium"
          } transition-all absolute top-0 left-4 h-full flex items-center pl-2 font-thin text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-0 group-focus-within:pl-0 peer-valid:pl-0`}
        >
          {label}
        </label>
      </div>
      {showHelper && <span className="text-red-dark text-xs">{error}</span>}
    </div>
  );
}
