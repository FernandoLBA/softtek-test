import React from "react";
import { cn } from "../../utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function AppCard({ className, children }: Props) {
  return (
    <div
      className={
        cn(`relative flex flex-col px-7 py-14 rounded-3xl border-4 bg-white-dark shadow-xl shadow-gray-shadow`,
        className)
      }
    >
      {children}
    </div>
  );
}
