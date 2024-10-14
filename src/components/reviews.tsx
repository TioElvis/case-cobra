// @components
import { ReviewGrid } from "./review-grid";
import { MaxWidthWrapper } from "./max-width-wrapper";

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt=""
        className="absolute select-none hidden -left-32 top-1/3 xl:block"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
