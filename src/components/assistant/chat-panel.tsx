"use client";

import { useState, useRef, useEffect } from "react";
import { useActions, useStreamableValue } from "ai/rsc";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Bot, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { aiHealthAssistantForMothers } from "@/ai/flows/health-assistant";
import { useFormState, useFormStatus } from 'react-dom';

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "Bagaimana cara mengatasi demam pada bayi?",
  "Apa saja tanda-tanda dehidrasi pada anak?",
  "Kapan waktu yang tepat untuk imunisasi DPT?",
  "Makanan apa yang baik untuk ibu menyusui?",
];

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (messageContent?: string) => {
    const content = messageContent || inputValue;
    if (!content.trim()) return;

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await aiHealthAssistantForMothers({ query: content });
      const assistantMessage: Message = { role: "assistant", content: response.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = { role: "assistant", content: "Maaf, terjadi kesalahan. Silakan coba lagi." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.length === 0 && (
             <div className="text-center p-8 text-muted-foreground">
                <Sparkles className="mx-auto h-12 w-12 mb-4 text-primary"/>
                <h2 className="text-xl font-semibold mb-2">Mulai Percakapan</h2>
                <p>Ajukan pertanyaan atau pilih salah satu di bawah ini.</p>
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-4",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-md rounded-lg p-3 text-sm",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4 justify-start">
              <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot /></AvatarFallback>
              </Avatar>
              <div className="max-w-md rounded-lg p-3 text-sm bg-muted flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
       {messages.length === 0 && !isLoading && (
        <div className="p-4 border-t">
          <p className="text-sm font-medium mb-2 text-muted-foreground">Saran pertanyaan:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <Button key={i} variant="outline" size="sm" onClick={() => handleSendMessage(q)}>
                {q}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div className="border-t p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ketik pertanyaan Anda di sini..."
            disabled={isLoading}
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
