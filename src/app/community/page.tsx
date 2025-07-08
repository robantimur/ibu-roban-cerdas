"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileImage, Loader2, MessageSquare, PlusCircle, Search, ThumbsUp, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { db } from "@/lib/firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  runTransaction,
  Timestamp,
} from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface PostAuthor {
  id: string;
  name: string | null;
  avatarUrl: string | null;
  title?: string;
}

interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  timestamp: Date;
  tags?: string[];
  likes: number;
  comments: number; // Placeholder for now
  likedBy: string[];
}

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "communityPosts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          author: {
            id: data.authorId,
            name: data.authorName,
            avatarUrl: data.authorAvatarUrl,
            title: "Pengguna",
          },
          content: data.content,
          timestamp: (data.timestamp as Timestamp)?.toDate() || new Date(),
          tags: data.tags,
          likes: data.likes || 0,
          comments: data.comments || 0,
          likedBy: data.likedBy || [],
        } as Post;
      });
      setPosts(postsData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCreatePost = async () => {
    if (!user || !newPostContent.trim()) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "communityPosts"), {
        authorId: user.uid,
        authorName: user.displayName,
        authorAvatarUrl: user.photoURL,
        content: newPostContent,
        timestamp: serverTimestamp(),
        likes: 0,
        likedBy: [],
        comments: 0,
        tags: ["Umum"], // Default tag for now
      });
      setNewPostContent("");
    } catch (error) {
      console.error("Error creating post: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLikePost = async (postId: string) => {
    if (!user) return;

    const postRef = doc(db, "communityPosts", postId);

    try {
      await runTransaction(db, async (transaction) => {
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists()) {
          throw "Document does not exist!";
        }

        const data = postDoc.data();
        const likedBy = data.likedBy || [];
        let newLikes = data.likes || 0;

        if (likedBy.includes(user.uid)) {
          // Unlike
          transaction.update(postRef, {
            likes: newLikes - 1,
            likedBy: likedBy.filter((uid: string) => uid !== user.uid),
          });
        } else {
          // Like
          transaction.update(postRef, {
            likes: newLikes + 1,
            likedBy: [...likedBy, user.uid],
          });
        }
      });
    } catch (e) {
      console.error("Transaction failed: ", e);
    }
  };

  const formatTimestamp = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true, locale: id });
  };
  
  const getInitials = (name?: string | null) => {
    if (!name) return "U";
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

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
            <Button className="w-full mb-4" disabled><PlusCircle className="mr-2 h-4 w-4"/> Buat Kiriman Baru</Button>
            <div className="relative mb-4">
              <Input placeholder="Cari di komunitas..." className="pr-10" disabled/>
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
          {user && (
            <Card className="p-4">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} data-ai-hint="user avatar"/>
                  <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                </Avatar>
                <Textarea 
                  placeholder="Apa yang ingin Anda bagikan hari ini?" 
                  className="flex-1"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex justify-end items-center mt-2 gap-2">
                  <Button variant="ghost" size="icon" disabled><FileImage className="h-5 w-5"/></Button>
                  <Button onClick={handleCreatePost} disabled={!newPostContent.trim() || isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                    Kirim
                  </Button>
              </div>
            </Card>
          )}

          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-3 w-1/5" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              </Card>
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id} className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={post.author.avatarUrl || ''} alt={post.author.name || ''} data-ai-hint="person avatar"/>
                    <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{post.author.name}</p>
                      <span className="text-xs text-muted-foreground">&middot; {formatTimestamp(post.timestamp)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{post.author.title}</p>
                    
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                    )}

                    <p className="text-foreground mb-4 whitespace-pre-wrap">{post.content}</p>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleLikePost(post.id)}
                        disabled={!user}
                      >
                          <ThumbsUp className={cn("h-4 w-4", user && post.likedBy.includes(user.uid) && "text-primary fill-primary/50")} /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" /> {post.comments} Komentar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center text-muted-foreground">
              <MessageSquare className="mx-auto h-12 w-12 mb-4"/>
              <h3 className="font-semibold text-lg">Belum ada kiriman</h3>
              <p>Jadilah yang pertama memulai percakapan di komunitas!</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
