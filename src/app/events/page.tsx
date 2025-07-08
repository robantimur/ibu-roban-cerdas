import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { communityEvents } from "@/lib/placeholder-data";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Acara Komunitas</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Ikuti berbagai kegiatan edukatif dan seru bersama komunitas SehatAI Keluarga.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            <Image
              src={event.imageUrl}
              alt={event.title}
              data-ai-hint={event.imageHint}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-secondary/50 p-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{event.attendees} / {event.capacity} peserta</span>
              </div>
              <Button>Daftar Sekarang</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
