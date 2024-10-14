import type { HTMLAttributes } from "react";
// @components
import { Phone } from "./phone";
// @libs
import { cn } from "@/lib/utils";

const POSSIBLE_ANIMATION_DELAYS = [
  "0s",
  "0.1s",
  "0.2s",
  "0.3s",
  "0.4s",
  "0.5s",
];

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

export function Review({ src, className, ...props }: Props) {
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn("animate-fade-in p-8 w-80", className)}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={src} />
    </div>
  );
}
