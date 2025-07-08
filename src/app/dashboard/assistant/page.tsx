import { ChatPanel } from "@/components/assistant/chat-panel";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function AssistantPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Health Assistant</h1>
        <p className="text-muted-foreground">
          Tanyakan apapun seputar kesehatan ibu dan anak di Roban Timur.
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <Card className="bg-accent/50 border-accent">
          <CardHeader className="flex flex-row items-center gap-4">
            <Lightbulb className="w-6 h-6 text-accent-foreground" />
            <div>
              <CardTitle className="text-accent-foreground">Disclaimer</CardTitle>
              <CardDescription className="text-accent-foreground/80">
                Asisten AI ini adalah alat bantu dan tidak menggantikan nasihat medis profesional. Selalu konsultasikan dengan dokter untuk masalah kesehatan yang serius.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        
        <div className="flex-1 flex flex-col bg-card border rounded-lg shadow-sm">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}
