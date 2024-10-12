import Link from "next/link";
// @components
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Footer() {
  return (
    <footer className="h-20 bg-white relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="text-center pb-2 md:text-left md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tutti i diritti riservati
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600">
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
