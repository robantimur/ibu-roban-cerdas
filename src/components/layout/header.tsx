"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "../logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const navLinks = [
  { href: "/articles", label: "Artikel" },
  { href: "/community", label: "Komunitas" },
  { href: "/events", label: "Acara" },
];

export function Header() {
  const pathname = usePathname();
  const { user, loading, logOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo className="mr-6" />
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname.startsWith(link.href) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
             {user && (
                 <Link
                    href="/dashboard"
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                      pathname.startsWith("/dashboard") ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    Dashboard
                  </Link>
             )}
          </nav>
        </div>

        {/* Mobile Menu & Logo */}
        <div className="flex flex-1 items-center md:hidden">
           <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Buka Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Logo className="mb-6" />
                <div className="flex flex-col space-y-4">
                  {[...navLinks, ...(user ? [{ href: "/dashboard", label: "Dashboard" }] : [])].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        </div>
         <div className="flex flex-1 justify-center md:hidden">
             <Logo />
        </div>


        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          {loading ? (
             <div className="h-9 w-20 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <Button variant="ghost" onClick={() => logOut()}>Keluar</Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Masuk</Link>
              </Button>
              <Button asChild className="hidden md:inline-flex">
                <Link href="/signup">Daftar</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
