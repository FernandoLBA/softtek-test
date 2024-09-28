import React from "react";

import { cn } from "../../../../utils";

export function HeroContainer({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section {...props} className={cn("", className)}>
      {children}
    </section>
  );
}
