import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, BookOpen, Star, Users, Trophy, User } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
    title: "AI Health Assistant",
    description: "Tanyakan apa saja seputar kesehatan dan dapatkan jawaban instan dari asisten AI kami.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "Educational Content",
    description: "Akses ratusan artikel, video, dan infografis tentang kesehatan keluarga.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-primary" />,
    title: "Gamification",
    description: "Belajar jadi menyenangkan! Kumpulkan poin dan lencana dengan menyelesaikan tantangan harian.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Profile Management",
    description: "Simpan informasi kesehatan keluarga Anda dan lacak kemajuan dengan mudah.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Community",
    description: "Terhubung dengan sesama orang tua, berbagi cerita, dan saling mendukung.",
  },
  {
    icon: <Star className="w-10 h-10 text-primary" />,
    title: "Event Management",
    description: "Ikuti acara-acara kesehatan menarik yang diselenggarakan di komunitas Anda.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Semua yang Ibu Cerdas Butuhkan
          </h2>
          <p className="text-lg text-foreground/90 mt-4 max-w-2xl mx-auto">
            Dirancang khusus oleh Mahasiswa KKN Undip untuk memberdayakan para ibu di Roban Timur dengan alat dan pengetahuan kesehatan praktis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-background shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
