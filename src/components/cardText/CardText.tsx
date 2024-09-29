import React from "react";
import { cn } from "../../utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function CardText({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-sm md:text-[12px] font-thin text-black-normal",
        className
      )}
    >
      {children}
    </p>
  );
}
