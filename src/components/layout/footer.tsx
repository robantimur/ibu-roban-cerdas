import Link from "next/link";
import { Logo } from "../logo";
import { Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Partner terpercaya Anda untuk kesehatan keluarga, didukung oleh AI.
            </p>
            <div className="flex gap-2">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Github">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Community">
                <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="md:col-start-3 flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h4 className="font-medium mb-2">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/articles" className="hover:text-primary">Artikel</Link></li>
                <li><Link href="/community" className="hover:text-primary">Komunitas</Link></li>
                <li><Link href="/events" className="hover:text-primary">Acara</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Tentang Kami</Link></li>
                <li><Link href="#" className="hover:text-primary">Karir</Link></li>
                <li><Link href="#" className="hover:text-primary">Kontak</Link></li>
                <li><Link href="#" className="hover:text-primary">Kebijakan Privasi</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SehatAI Keluarga. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
