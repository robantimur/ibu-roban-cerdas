import Link from "next/link";
import { Logo } from "../logo";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Program Kuliah Kerja Nyata (KKN) Tim 1 Kelompok 5 <br/>
              Universitas Diponegoro di Desa Roban Timur.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
              <h4 className="font-medium">Hubungi Kami</h4>
              <Link href="https://www.instagram.com/kkn.dirobantimur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                @kkn.dirobantimur
              </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KKN Tim 1 Undip Roban Timur. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
