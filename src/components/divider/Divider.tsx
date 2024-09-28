import { cn } from "../../utils";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("border border-gray-800 my-5 w-full md:hidden", className)}
    />
  );
}
