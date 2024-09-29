import React from "react";

import { cn } from "../../utils";

interface Props extends React.InputHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
  children?: React.ReactNode;
}

export function AppLink({ children, text, href, className, ...props }: Props) {
  return (
    <a {...props} href={href} className={cn("text-xs underline", className)}>
      <div className="flex items-center gap-3">
        {children}
        {text}
      </div>
    </a>
  );
}
