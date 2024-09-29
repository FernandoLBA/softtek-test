import React from "react";

import { cn } from "../../utils";

interface Props extends React.InputHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text: string;
  className?: string;
}

export function AppButton({ children, text, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        "bg-black-dark font-bold text-white-dark w-full md:w-[195px] h-[56px] md:h-[64px] rounded-full mt-6",
        className
      )}
      type="submit"
    >
      <div className="flex items-center justify-center gap-3">
        {children}
        {text}
      </div>
    </button>
  );
}
