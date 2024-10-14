"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
// @components
import { ReviewColumn } from "./review-column";
// @libs
import { cn, SplitArray } from "@/lib/utils";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

export function ReviewGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const columns = SplitArray(PHONES, 3);

  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = SplitArray(columns[2], 2);

  return (
    <div
      ref={ref}
      className="h-[32rem] max-h-[150vh] relative mt-16 grid grid-cols-1 items-start place-items-center gap-8 overflow-hidden px-4 sm:mt-20 md:h-[48rem] md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="h-20 pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-slate-100" />
      <div className="h-20 pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-100" />
    </div>
  );
}
