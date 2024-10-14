"use client";
import { useEffect, useRef, useState } from "react";
// @components
import { Each } from "./each";
import { Review } from "./review";
// @libs
import { cn } from "@/lib/utils";

interface Props {
  reviews: Array<string>;
  className?: string;
  reviewClassName?: (index: number) => string;
  msPerPixel: number;
}

export function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: Props) {
  const [columnHigh, setColumnHigh] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  const duration = `${columnHigh * msPerPixel}ms`;

  useEffect(() => {
    if (!!ref.current === false) {
      return;
    }

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHigh(ref.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      <Each
        of={reviews.concat(reviews)}
        render={(src, index) => {
          return (
            <Review
              src={src}
              className={reviewClassName?.(index % reviews.length)}
            />
          );
        }}
      />
    </div>
  );
}
