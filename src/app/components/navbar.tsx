import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// @components
import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="w-full h-14 px-8 sticky z-[99] inset-x-0 top-0 border-gray-200 border-b bg-white transition-all md:px-0">
      <MaxWidthWrapper>
        <div className="h-14 flex items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            case<span className="text-primary">cobra</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {!!user === true ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Esci
                </Link>
                {isAdmin === true && (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Dashboard
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Registrati
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Login
                </Link>
              </>
            )}
            <div className="w-px h-8 hidden bg-zinc-200 sm:block" />
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "sm",
                className: "hidden items-center gap-1 sm:flex",
              })}>
              Crea una cover
              <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
