import { ChatPanel } from "@/components/assistant/chat-panel";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function AssistantPage() {
  return (
    <div className="flex flex-1 flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-4xl flex-1 flex-col">
        <div className="mb-6 shrink-0">
          <h1 className="text-3xl font-bold tracking-tight">AI Health Assistant</h1>
          <p className="text-muted-foreground">
            Tanyakan apapun seputar kesehatan ibu dan anak di Roban Timur.
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-6">
          <Card className="bg-accent/50 border-accent shrink-0">
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
          
          <div className="flex flex-1 flex-col rounded-lg border bg-card shadow-sm min-h-0">
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
