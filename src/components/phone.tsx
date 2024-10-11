// @libs
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: Readonly<Props>) {
  const src = dark
    ? "/phone-template-dark-edges.png"
    : "/phone-template-white-edges.png";

  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      <img
        src={src}
        alt="phone image"
        className="pointer-events-none z-50 select-none"/>
      <div className="absolute -z-10 inset-0">
        <img
          src={imgSrc}
          alt="overlaying phone image"
          className="object-cover min-w-full min-h-full"/>
      </div>
    </div>
  );
}