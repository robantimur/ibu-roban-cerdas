import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
              Kesehatan Keluarga di Ujung Jari Anda
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Dapatkan informasi kesehatan terpercaya, konsultasi AI, dan dukungan komunitas untuk menjaga keluarga Anda tetap sehat dan bahagia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/signup">Mulai Gratis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/articles">Jelajahi Konten</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Happy family"
              data-ai-hint="happy family"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
