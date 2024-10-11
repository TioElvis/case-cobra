import Link from "next/link";
// @components
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Footer() {
  return (
    <footer className="bg-white relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200"/>
        <div className="py-6 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between">
          <div className="text-center pb-2 md:text-left md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tutti i diritti riservati
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600">
                Termini
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600">
                Informativa sulla Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600">
                Politica sui Cookie
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
