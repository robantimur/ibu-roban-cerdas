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
              Menjadi Ibu Cerdas untuk Keluarga Sehat
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Platform edukasi kesehatan digital yang dirancang khusus untuk para ibu di Roban Timur. Dapatkan informasi terpercaya, tanya jawab dengan AI, dan terhubung dengan komunitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/signup">Gabung Komunitas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/articles">Jelajahi Artikel</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://dmc.dompetdhuafa.org/wp-content/uploads/2025/05/DMC05478-1024x576.jpg"
              alt="Kegiatan penyuluhan kesehatan komunitas"
              data-ai-hint="health education community"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
