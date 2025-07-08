
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
      <div className="container relative flex h-16 items-center justify-between px-4">
        
        {/* Left Side: Desktop Nav & Mobile Menu */}
        <div className="flex items-center">
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Buka Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0 flex flex-col">
                  <div>
                    <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                    <div className="mb-6 pl-4">
                      <Logo />
                    </div>
                    <div className="flex flex-col space-y-1 px-4">
                      {navLinks.map((link) => (
                        <Button variant="ghost" className="justify-start" asChild key={link.href}>
                           <Link href={link.href}>{link.label}</Link>
                        </Button>
                      ))}
                      {user && (
                        <>
                          <Button variant="ghost" className="justify-start" asChild>
                            <Link href="/dashboard">Dashboard</Link>
                          </Button>
                          <Button variant="ghost" className="justify-start" asChild>
                            <Link href="/dashboard/assistant">Asisten AI</Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="mt-auto p-4 border-t">
                     {loading ? (
                        <div className="space-y-2">
                          <div className="h-9 w-full animate-pulse rounded-md bg-muted" />
                          <div className="h-9 w-full animate-pulse rounded-md bg-muted" />
                        </div>
                     ) : user ? (
                       <Button variant="outline" className="w-full" onClick={() => logOut()}>Keluar</Button>
                     ) : (
                       <div className="flex flex-col gap-2">
                         <Button asChild className="w-full">
                           <Link href="/signup">Daftar</Link>
                         </Button>
                         <Button variant="outline" asChild className="w-full">
                           <Link href="/login">Masuk</Link>
                         </Button>
                       </div>
                     )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              <Logo />
              <nav className="ml-6 flex items-center space-x-6 text-sm font-medium">
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
                   <>
                     <Link
                        href="/dashboard"
                        className={cn(
                          "transition-colors hover:text-foreground/80",
                          pathname.startsWith("/dashboard") && !pathname.startsWith("/dashboard/assistant")
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/assistant"
                        className={cn(
                          "transition-colors hover:text-foreground/80",
                          pathname.startsWith("/dashboard/assistant") ? "text-foreground" : "text-foreground/60"
                        )}
                      >
                        Asisten AI
                      </Link>
                   </>
                 )}
              </nav>
            </div>
        </div>

        {/* Center Logo on Mobile */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
          <Logo />
        </div>
        
        {/* Right Side: Auth Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2">
          {loading ? (
             <div className="h-9 w-20 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <Button variant="ghost" onClick={() => logOut()}>Keluar</Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Masuk</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Daftar</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
