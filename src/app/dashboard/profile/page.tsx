import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, Trash2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profil Saya</h1>
        <p className="text-muted-foreground">Kelola informasi pribadi dan data kesehatan keluarga Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Pribadi</CardTitle>
              <CardDescription>Perbarui data pribadi Anda di sini.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" defaultValue="Nama Pengguna" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="user@example.com" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Lokasi</Label>
                <Input id="location" defaultValue="Roban Timur" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Simpan Perubahan</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Foto Profil</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <Avatar className="w-32 h-32">
                        <AvatarImage src="https://placehold.co/128x128.png" alt="User" data-ai-hint="user avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">Ubah Foto</Button>
                </CardContent>
            </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Profil Kesehatan Keluarga</CardTitle>
              <CardDescription>Tambahkan dan kelola profil kesehatan anggota keluarga.</CardDescription>
            </div>
            <Button variant="outline" size="sm"><PlusCircle className="mr-2 h-4 w-4" /> Tambah Anggota</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Anak Pertama - Budi (5 Tahun)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tanggal Lahir</Label>
                    <Input type="date" defaultValue="2019-05-20" />
                  </div>
                   <div className="space-y-2">
                    <Label>Golongan Darah</Label>
                    <Input defaultValue="A+" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Riwayat Alergi</Label>
                  <Input defaultValue="Debu, Makanan Laut" />
                </div>
                 <div className="space-y-2">
                  <Label>Catatan Imunisasi</Label>
                  <Input defaultValue="Lengkap sesuai jadwal" />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                    <Button variant="destructive" size="sm"><Trash2 className="mr-2 h-4 w-4" /> Hapus</Button>
                    <Button size="sm">Simpan</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Anak Kedua - Sinta (2 Tahun)</AccordionTrigger>
              <AccordionContent>
                Profil kesehatan untuk Sinta belum diisi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
