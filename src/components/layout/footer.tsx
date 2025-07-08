import Link from "next/link";
import { Logo } from "../logo";
import { Instagram } from "lucide-react";

const footerLinks = [
    { href: "/", label: "Beranda" },
    { href: "/articles", label: "Artikel" },
    { href: "/community", label: "Komunitas" },
    { href: "/events", label: "Acara" },
    { href: "/about", label: "Tentang Kami" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Program Kuliah Kerja Nyata (KKN) Tim 1 Kelompok 5
              Universitas Diponegoro di Desa Roban Timur.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-foreground">Tautan Cepat</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-foreground">Hubungi Kami</h4>
            <Link href="https://www.instagram.com/kkn.dirobantimur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span>@kkn.dirobantimur</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KKN Tim 1 Undip Roban Timur.</p>
        </div>
      </div>
    </footer>
  );
}