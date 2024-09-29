import React from "react";

import { cn } from "../../utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: Props) {
  return (
    <h4 className={cn("text-xl font-bold text-black-normal", className)}>
      {children}
    </h4>
  );
}
