import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileImage, MessageSquare, PlusCircle, Search, ThumbsUp, User } from "lucide-react";
import { communityPosts } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Komunitas Ibu Cerdas</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Terhubung, berbagi, dan belajar bersama para ibu hebat lainnya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card className="p-4 sticky top-24">
            <Button className="w-full mb-4"><PlusCircle className="mr-2 h-4 w-4"/> Buat Kiriman Baru</Button>
            <div className="relative mb-4">
              <Input placeholder="Cari di komunitas..." className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start">Semua Kiriman</Button>
              <Button variant="ghost" className="justify-start text-muted-foreground">Gizi & Resep</Button>
              <Button variant="ghost" className="justify-start text-muted-foreground">Tanya Jawab</Button>
              <Button variant="ghost" className="justify-start text-muted-foreground">Kisah Sukses</Button>
            </nav>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <Card className="p-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="user avatar"/>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Textarea placeholder="Apa yang ingin Anda bagikan hari ini?" className="flex-1" />
            </div>
            <div className="flex justify-end items-center mt-2 gap-2">
                <Button variant="ghost" size="icon"><FileImage className="h-5 w-5"/></Button>
                <Button>Kirim</Button>
            </div>
          </Card>

          {communityPosts.map((post) => (
            <Card key={post.id} className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={post.author.avatarUrl} alt={post.author.name} data-ai-hint="person avatar"/>
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{post.author.name}</p>
                    <span className="text-xs text-muted-foreground">&middot; {post.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{post.author.title}</p>
                  
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  )}

                  <p className="text-foreground mb-4">{post.content}</p>

                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" /> {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" /> {post.comments} Komentar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
