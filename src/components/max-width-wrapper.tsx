import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function MaxWidthWrapper({ className, children }: Readonly<Props>) {
  return <div className={cn("w-full h-full mx-auto max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>;
}
