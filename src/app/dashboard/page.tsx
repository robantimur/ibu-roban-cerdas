import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Apple, BookOpen, MessageSquare, Smile, Droplet, Users, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const gamificationData = {
  points: 1250,
  level: 4,
  nextLevelPoints: 1500,
  badges: [
    { icon: <Apple className="w-6 h-6 text-green-500" />, name: "Ahli Gizi", description: "Menguasai konten gizi" },
    { icon: <Smile className="w-6 h-6 text-blue-500" />, name: "Dokter Gigi Kecil", description: "Menguasai kesehatan gigi" },
    { icon: <Droplet className="w-6 h-6 text-cyan-500" />, name: "Pakar Sanitasi", description: "Menguasai sanitasi" },
  ],
  dailyChallenges: [
    { icon: <BookOpen className="w-4 h-4 text-primary" />, description: "Baca 1 artikel kesehatan", points: 50, completed: true },
    { icon: <MessageSquare className="w-4 h-4 text-primary" />, description: "Tanya AI tentang kesehatan", points: 30, completed: false },
    { icon: <Users className="w-4 h-4 text-primary" />, description: "Ikut serta dalam komunitas", points: 75, completed: false },
  ],
};

export default function DashboardPage() {
  const progressPercentage = (gamificationData.points / gamificationData.nextLevelPoints) * 100;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Selamat datang kembali! Ini ringkasan aktivitas kesehatanmu.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Progress Level</CardTitle>
            <CardDescription>Level {gamificationData.level}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="mb-2" />
            <p className="text-sm text-muted-foreground text-center">
              {gamificationData.points} / {gamificationData.nextLevelPoints} Poin menuju Level {gamificationData.level + 1}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Poin Saya</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{gamificationData.points}</p>
            <p className="text-sm text-muted-foreground">Terus kumpulkan poin!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Streak Harian</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-500" />
            <p className="text-2xl font-bold">5 Hari</p>
            <p className="text-sm text-muted-foreground">Jangan sampai putus!</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Lencana Saya</CardTitle>
            <CardDescription>Koleksi pencapaian yang sudah kamu raih.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {gamificationData.badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2 p-4 border rounded-lg w-28">
                {badge.icon}
                <p className="text-sm font-medium">{badge.name}</p>
              </div>
            ))}
            <div className="flex flex-col items-center text-center gap-2 p-4 border rounded-lg w-28 border-dashed text-muted-foreground">
               <div className="w-6 h-6 bg-muted rounded-full" />
                <p className="text-sm font-medium">Coming Soon</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tantangan Harian</CardTitle>
            <CardDescription>Selesaikan untuk mendapatkan poin tambahan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {gamificationData.dailyChallenges.map((challenge, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  {challenge.icon}
                  <p className="text-sm">{challenge.description}</p>
                </div>
                {challenge.completed ? (
                  <Badge variant="default" className="bg-green-600">Selesai</Badge>
                ) : (
                  <Button size="sm" variant="outline">
                    +{challenge.points} Poin
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
