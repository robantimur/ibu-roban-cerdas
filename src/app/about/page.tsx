import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

// Ganti dengan data anggota tim Anda
const teamMembers = [
  { name: "Nama Anggota 1", role: "Ketua Kelompok" },
  { name: "Nama Anggota 2", role: "Anggota" },
  { name: "Nama Anggota 3", role: "Anggota" },
  { name: "Nama Anggota 4", role: "Anggota" },
  { name: "Nama Anggota 5", role: "Anggota" },
  { name: "Nama Anggota 6", role: "Anggota" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Tentang Kami</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Mengenal tim di balik platform "Ibu Roban Cerdas".
        </p>
      </div>

      <Card className="mb-12">
        <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
                 <Image
                    src="https://placehold.co/400x400.png"
                    data-ai-hint="university logo"
                    alt="Logo Universitas Diponegoro"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">KKN Tim 1 Kelompok 5 Universitas Diponegoro</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Kami adalah sekelompok mahasiswa dari Universitas Diponegoro yang menjalankan program Kuliah Kerja Nyata (KKN) di Desa Roban Timur. Platform "Ibu Roban Cerdas" ini merupakan wujud dedikasi dan program kerja kami untuk berkontribusi pada peningkatan literasi kesehatan masyarakat, khususnya bagi para ibu dan keluarga di wilayah ini.
                </p>
            </div>
        </CardContent>
      </Card>
      
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold">Tim Kami</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={`https://placehold.co/100x100.png`} alt={member.name} data-ai-hint="person portrait" />
              <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <h4 className="font-semibold">{member.name}</h4>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
