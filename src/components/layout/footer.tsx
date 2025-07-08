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
              Your trusted partner in family health, powered by AI.
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
                <li><Link href="/articles" className="hover:text-primary">Articles</Link></li>
                <li><Link href="/community" className="hover:text-primary">Community</Link></li>
                <li><Link href="/events" className="hover:text-primary">Events</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SehatAI Keluarga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
